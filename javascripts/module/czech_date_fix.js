"use strict";

define(['lib/page_property_miner', 'vendor/moment', 'lib/date_format'], function (ppp, moment, dateFormat) {
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

        var $issueAttributes = $issue.find('table.attributes');

        // Fix date in start date
        var $startDateTd = $issueAttributes.find('td.start-date');
        if (dateFormat.isTextDate($startDateTd.text())) {
          var startDate = moment($startDateTd.text());
          $startDateTd.text(dateFormat.formatFullDateWithRelative(startDate));
        }

        // Fix date in due date
        var $dueDate = $issueAttributes.find('td.due-date');
        if (dateFormat.isTextDate($dueDate.text())) {
          var dueDate = fixDueDate(moment($dueDate.text()));
          $dueDate.text(dateFormat.formatFullDateWithRelative(dueDate));
        }
      }
    }
  }
});