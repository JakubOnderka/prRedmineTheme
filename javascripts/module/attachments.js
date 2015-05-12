"use strict";

define(['lib/page_property_miner', 'lib/local_storage', 'lib/redmine_api'], function (ppp, ls, RedmineApi) {
  return {
    init: function () {

      if (!ppp.matchPage('issues', 'show') || !ls.get('enabled:attachments')) {
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
      }
    },

    insertAtCursor: function (myField, myValue) {
      //IE support
      if (document.selection) {
        myField.focus();
        var sel = document.selection.createRange();
        sel.text = myValue;
      }
      //MOZILLA and others
      else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
        + myValue
        + myField.value.substring(endPos, myField.value.length);
      } else {
        myField.value += myValue;
      }
    },

    uploaded: function () {
      var redmineApi = new RedmineApi(),
        $lastAttachment = $('#attachments_fields span').last(),
        lastAttachmentId = $lastAttachment.find('a.remove-upload').attr('href').split('?')[0].split('/')[2].split('.')[0],
        self = this;

      redmineApi.getAttachment(lastAttachmentId, function (attachment) {
        attachment = attachment.attachment;

        if (attachment.content_type.split('/')[0] === 'image') {
          $('<a href="#">Přidat do editoru</a>').appendTo($lastAttachment).click(function () {
            var text = '!' + attachment.filename  + '!';
            self.insertAtCursor($('#issue_notes')[0], text);
            return false;
          });
        }
      });
    }
  }
});