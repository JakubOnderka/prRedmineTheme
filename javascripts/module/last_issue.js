"use strict";

define([
  'lib/page_property_miner',
  'lib/issue_property_miner',
  'lib/local_storage',
  'templates'
], function (ppp, ipm, ls, templates) {
  return {
    init: function () {
      if (!ls.get('enabled:lastIssue')) {
        return;
      }

      var properties = ipm();
      if (properties) {
        ls.set('last_issue', JSON.stringify({
          id: properties.id,
          projectName: properties.projectName,
          title: properties.title
        }));
      }

      if (ppp.matchPage('welcome', 'index')) {
        var lastIssue = ls.get('last_issue');
        if (lastIssue) {
          var template = templates['last_issue'](JSON.parse(lastIssue));
          $('#content .splitcontentright').prepend(template);
        }
      }
    }
  }
});