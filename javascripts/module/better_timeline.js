"use strict";

define(['lib/page_property_miner'], function (ppp) {
  return {
    init: function () {
      if (ppp.matchPage('issues', 'show')) {
        var $history = $('#history');

        $(' <a href="#" class="showStatusChanges">(show all issue status changes)</a>')
          .appendTo($history.find('h3'))
          .click(function () {
            $history.find('.peekable').removeClass('peekable');
            $(this).remove();
            return false;
          });

        $history.find('>.journal:not(.has-notes)')
          .addClass('peekable')
          .click(function () {
            $(this).removeClass('peekable');
          });
      }
    }
  }
});