"use strict";

// return closed ticket to its author ans set closing time automatically where possible
define([
  'lib/page_property_miner',
  'lib/replace_issue_form_proxy',
  'lib/issue_property_miner',
  'vendor/moment'
], function (ppp, proxy, ipm, moment) {
  return {
    init: function () {

      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      var returnToOwner = function () {
        var author = ipm().createdBy.id;

        var $issueAssignedToId = $('select#issue_assigned_to_id');
        $issueAssignedToId.val(author);
        $issueAssignedToId.prev('label').highlight();
      },

      setClosingDate = function () {
        var $issueCustomFieldValues24 = $('#issue_custom_field_values_24');
        if ($issueCustomFieldValues24.size() > 0) {
          $issueCustomFieldValues24.val(moment().format('YYYY-MM-DD'));
          $issueCustomFieldValues24.prev('label').highlight();
        }
      };

      var $allAttributes = $('#all_attributes'),
        assignedToChanged = false;

      $allAttributes.on('change', 'select#issue_assigned_to_id', function () {
        assignedToChanged = true;
      });

      $allAttributes.on('change', 'select#issue_status_id', function () {
        var value = $(this).val();
        if (value == 3) { // Solved
          if (!assignedToChanged) {
            proxy(function () {
              returnToOwner();
            });
          }
        } else if (value == 17 || value == 5) { // Closed (on baufinder) OR Closed anywhere else
          proxy(function () {
            setClosingDate();
          });
        }
      });
    }
  }
});