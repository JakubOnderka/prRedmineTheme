"use strict";

define(['lib/page_property_miner', 'lib/translate'], function (ppp, _) {
  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      var $issue = $('#content .issue');

      var subject = _('Subject'),
        status = _('Status'),
        assignee = _('Assignee'),
        done = _('Done'),
        dueDate = _('Due date');

      var issueTree = [
          '<th>' + subject +'</th>',
          '<th>' + status +'</th>',
          '<th>' + assignee +'</th>',
          '<th>' + done +'</th>'
      ];

      var relations = [
        '<th>' + subject +'</th>',
        '<th>' + status +'</th>',
        '<th>' + assignee +'</th>',
        '<th>' + dueDate +'</th>',
        '<th></th>'
      ];

      $issue.find('#issue_tree table.list.issues').prepend('<thead><tr>' + issueTree.join('') + '</tr></thead>');
      $issue.find('#relations table.list.issues').prepend('<thead><tr>' + relations.join('') + '</tr></thead>');
    }
  }
});