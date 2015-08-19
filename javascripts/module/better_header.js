"use strict";

define(function () {
  return {
    init: function () {
      // header links
      $('#header h1').prepend('<a class="go-to-my-issues" href="/issues?query_id=135" title="My issues"></a><a class="go-to-projects" href="/projects" title="Projects"></a>');
      //standard link for my issues: /issues?assigned_to_id=me&set_filter=1&sort=priority%3Adesc%2Cupdated_on%3Adesc
    }
  }
});