"use strict";

define([
  'lib/page_property_miner',
  'lib/local_storage',
  'lib/redmine_api',
  'lib/translate',
  'lib/textarea_insert_at_cursor'
], function (ppp, ls, RedmineApi, _, insertAtCursor) {
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

      uploadBlob = function (blob, uploadUrl, attachmentId, options) {
        var output = proxied.apply(this, arguments);
        output.done(function () {
          self.uploaded(attachmentId, blob);
        });
        return output;
      };
    },

    uploaded: function (attachmentId, blob) {
      this.processAttachment($('#attachments_fields').find('#attachments_' + attachmentId), blob);
    },

    processAttachment: function ($attachment, blob) {
      var redmineApi = new RedmineApi(),
        attachmentId = $attachment.find('a.remove-upload').attr('href').split('?')[0].split('/')[2].split('.')[0],
        self = this;

      redmineApi.getAttachment(attachmentId, function (attachment) {
        attachment = attachment.attachment;

        if (attachment.content_type.split('/')[0] === 'image') {
          $('<a href="#">' + _('Add to editor') + '</a>').appendTo($attachment).click(function () {

            var text;
            if (attachment.content_url.indexOf('%') !== -1) {
              // Filename contains special character, so we must use full url to attachment (it is Redmine bug)
              text = '!/attachments/download/';
              text += attachment.id;
              text += '/#';
              text += blob.name.split(' ').join('%20');
              text += '!';

            } else {
              text = '!' + attachment.filename  + '!';
            }

            insertAtCursor(document.getElementById(self.activeEditor), text);
            return false;
          });
        }
      });
    }
  }
});