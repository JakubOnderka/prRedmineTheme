"use strict";

define([
  'lib/page_property_miner',
  'lib/local_storage',
  'lib/redmine_api',
  'lib/translate'
], function (ppp, ls, RedmineApi, _) {
  return {
    activeEditor: 'issue_notes',

    init: function () {
      if (ppp.matchPage('issues', 'show') || ppp.matchPage('issues', 'edit')) {
        $('#issue_description').focus(function () {
          self.activeEditor = 'issue_description';
        });
        $('#issue_notes').focus(function () {
          self.activeEditor = 'issue_notes';
        });

      } else if (ppp.matchPage('issues', 'new')) {
        this.activeEditor = 'issue_description';

      } else {
        return;
      }

      var proxied = uploadBlob,
        self = this;

      uploadBlob = function () {
        var output = proxied.apply(this, arguments);
        output.done(function () {
          self.uploaded();
        });
        return output;
      };
    },

    insertAtCursor: function (myField, toAdd) {
      // IE support
      if (document.selection) {
        myField.focus();
        var sel = document.selection.createRange();
        sel.text = toAdd;

      } else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart,
          endPos = myField.selectionEnd,
          value = myField.value;

        if (startPos > 1 && value.substring(startPos - 1, startPos) != "\n") {
          toAdd = "\n" + toAdd;
        }

        myField.value = value.substring(0, startPos)
          + toAdd
          + value.substring(endPos, value.length);

        myField.selectionStart = myField.selectionEnd = startPos + toAdd.length;

      } else {
        myField.value += toAdd;
      }
    },

    uploaded: function () {
      var self = this;
      $('#attachments_fields span').each(function () {
        var $this = $(this);

        if ($this.hasClass('ajax-loading') || $this.hasClass('ajax-waiting') || $this.hasClass('add-to-editor')) {
          return;
        }

        self.processAttachment($this);
      });
    },

    processAttachment: function ($attachment) {
      var redmineApi = new RedmineApi(),
        attachmentId = $attachment.find('a.remove-upload').attr('href').split('?')[0].split('/')[2].split('.')[0],
        self = this;

      redmineApi.getAttachment(attachmentId, function (attachment) {
        attachment = attachment.attachment;

        if (attachment.content_type.split('/')[0] === 'image') {
          $attachment.addClass('add-to-editor');
          $('<a href="#">' + _('Add to editor') + '</a>').appendTo($attachment).click(function () {

            var text;
            if (attachment.filename.indexOf(' ') !== -1) {
              // Filename contains space, so we must use full url to attachment (it is Redmine bug)
              var parser = document.createElement('a');
              parser.href = attachment.content_url;
              text = '!' + parser.pathname + '!';
            } else {
              text = '!' + attachment.filename  + '!';
            }

            self.insertAtCursor(document.getElementById(self.activeEditor), text);
            return false;
          });
        }
      });
    }
  }
});