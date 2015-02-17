"use strict";

define(['lib/page_property_miner'], function (ppp) {
  return {
    init: function () {
      if (ppp.matchPage('issues', 'show')) {
        document.title = document.title.replace(/^([^#]*)/, '');
      }
    }
  }
});