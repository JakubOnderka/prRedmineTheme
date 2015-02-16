"use strict";

define(['lib/page_property_miner'], function (ppp) {
  return {
    constructor: function () {
      if (ppp.matchPage('issues', 'show')) {
        document.title = document.title.replace(/^([^#]*)/, '');
      }
    }
  }
});