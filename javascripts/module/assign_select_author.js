"use strict";

define([
  'lib/page_property_miner',
  'lib/issue_property_miner',
  'lib/translate',
  'lib/replace_issue_form_proxy'
], function (ppp, ipm, _, proxy) {
  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      function addText() {
        $('#issue_assigned_to_id').find('option[value="' + ipm().createdBy.id +'"]').each(function() {
          $(this).text($(this).text() + ' (' +  _('author') + ')');
        });
      }

      if (!ipm().isCreatedByMe) {
        addText();
        proxy(addText);
      }
    }
  }
});