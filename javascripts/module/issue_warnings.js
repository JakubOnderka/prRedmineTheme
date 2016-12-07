"use strict";

define([
  'lib/issue_property_miner',
  'lib/date_format',
  'vendor/moment',
  'templates'
], function (ipm, dateFormat, moment, templates) {
  function addFlash(type, message) {
    return $('<div class="flash ' + type +'">' + message + '</div>')
      .css('display', 'none')
      .prependTo('#content')
      .slideDown('slow');
  }

  return {
    init: function () {
      var properties = ipm();

      // Due date
      if (properties && properties.isAssignedToMe && dateFormat.isTextDate(properties.dueDate)) {
        var dueDate = dateFormat.dueDateWithTime(moment(properties.dueDate));

        if (dueDate.isBefore(moment())) {
          addFlash('error', templates['issue_warning_duedate']({due_date: dateFormat.betterFromNow(dueDate)}));
        } else {
          var diff = dueDate.diff(moment().startOf('day'), 'days');
          if (diff < 7) {
            addFlash('notice', templates['issue_warning_duedate_near']({due_date: dateFormat.betterFromNow(dueDate)}));
          }
        }
      }
    }
  }
});