"use strict";

define(['lib/page_property_miner', 'vendor/moment'], function (ppp, moment) {
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
      }
    }
  }
});