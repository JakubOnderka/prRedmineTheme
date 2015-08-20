"use strict";

// Clickable issues names in related issues list
define(['lib/page_property_miner'], function (ppp) {
  return {
    init: function () {
      if (ppp.matchPage('issues', 'show')) {
        $('table.list.issues td.subject').each(function () {
          var $this = $(this);
          $this.html($this.find('a').html($this.text()));
        });
      }
    }
  }
});