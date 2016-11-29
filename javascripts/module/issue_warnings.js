"use strict";

define(['lib/issue_property_miner', 'lib/date_format', 'vendor/moment'], function (ipm, dateFormat, moment) {
  function addFlash(type, message) {
    return $('<div class="flash ' + type +'">' + message + '</div>')
      .css('display', 'none')
      .prependTo('#content')
      .slideDown('slow');
  }

  return {
    init: function () {
      // Currently, we support only Czech language
      if (document.documentElement.lang !== 'cs') {
        return;
      }

      var properties = ipm();

      // Due date
      if (properties && properties.isAssignedToMe && dateFormat.isTextDate(properties.dueDate)) {
        var dueDate = dateFormat.dueDateWithTime(moment(properties.dueDate));

        if (dueDate.isBefore(moment())) {
          addFlash('error', [
            '<strong>Vypřesný termín dokončení.</strong> Tento úkol měl být uzavřen ',
            dateFormat.betterFromNow(dueDate), '.'
          ].join(''));

        } else {
          var diff = dueDate.diff(moment().startOf('day'), 'days');
          if (diff < 7) {
            addAlert(
              'notice',
              '<strong>Blíží se termín dokončení.</strong> Tento úkol má být uzavřen ' + dateFormat.betterFromNow(dueDate) + '.'
            );
          }
        }
      }
    }
  }
});