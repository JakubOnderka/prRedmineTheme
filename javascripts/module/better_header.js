"use strict";

define(['lib/page_property_miner'], function (ppp) {
  return {
    init: function () {
      // header links
      $('#header h1').prepend('<a class="go-to-my-issues" href="https://redmine.proofreason.com/issues?query_id=135">My issues</a><a class="go-to-projects" href="/projects">Projects</a>');
      //standard link for my issues: /issues?assigned_to_id=me&set_filter=1&sort=priority%3Adesc%2Cupdated_on%3Adesc

      if ($(window).width() > 640 && !ppp.matchPage('issues', 'show')) {
        $('#q').focus();
      }
    }
  }
});