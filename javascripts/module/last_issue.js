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
        var lastIssueJson = JSON.stringify({
          id: properties.id,
          projectTitle: properties.projectTitle,
          title: properties.title
        });

        ls.set('last_issue', lastIssueJson, 168);
        ls.set('last_issue[' + properties.projectName + ']', lastIssueJson, 168)
      }

      var lastIssue, template;

      if (ppp.matchPage('welcome', 'index')) {
        lastIssue = ls.get('last_issue');
        if (lastIssue) {
          template = templates['last_issue'](JSON.parse(lastIssue));
          $('#content .splitcontentright').prepend(template);
        }

      } else if (ppp.matchPage('projects', 'show')) {
        lastIssue = ls.get('last_issue[' + ppp.getProjectName() +']');
        if (lastIssue) {
          template = templates['last_issue'](JSON.parse(lastIssue));
          $('#content .splitcontentright').prepend(template);
        }
      }
    }
  }
});