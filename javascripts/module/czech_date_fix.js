"use strict";

define([
  'lib/page_property_miner',
  'vendor/moment',
  'lib/date_format',
  'lib/issue_property_miner'
], function (ppp, moment, dateFormat, ipm) {
  if (document.documentElement.lang !== 'cs') {
    return;
  }

  function relativePastDate(momentDate) {
    var agoText = momentDate.fromNow();
    agoText = agoText.replace('před ', '');
    return agoText;
  }

  function fixDateInLink($a) {
    var title = $a.attr('title'),
      ago = moment(title);

    $a.text(relativePastDate(ago));
  }

  function fixDueDate(momentDate) {
    var cloned = moment(momentDate);
    cloned.hour(16);
    return cloned;
  }

  return {
    init: function () {
      if (ppp.matchPage('issues', 'show')) {
        // Fix date in issue header
        var $issue = $('.issue');
        fixDateInLink($issue.find('.author a:eq(1)'));
        fixDateInLink($issue.find('.author a:eq(2)'));

        // Fix date in history
        $('#history').find('h4').each(function() {
          var $a = $(this).find('a').last();
          fixDateInLink($a);
        });

        var properties = ipm();

        // Fix date in start date
        if (dateFormat.isTextDate(properties.startDate)) {
          var startDate = moment(properties.startDate);
          var $startDateTd = $issue.find('.start-date .value');
          $startDateTd.text(dateFormat.formatFullDateWithRelative(startDate));
        }

        // Fix date in due date
        if (dateFormat.isTextDate(properties.dueDate)) {
          var dueDate = fixDueDate(moment(properties.dueDate));
          var $dueDate = $issue.find('.due-date .value');
          $dueDate.text(dateFormat.formatFullDateWithRelative(dueDate));
        }
      }
    }
  }
});