"use strict";

define(['lib/page_property_miner', 'templates'], function (ppp, templates) {
  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      var $issue = $('#content .issue'),
        $issueTree = $issue.find('#issue_tree table.list.issues'),
        $issueRelations = $issue.find('#relations table.list.issues');

      if ($issueTree.length) {
        $issueTree.prepend(templates['issue_tree_header']());
      }

      if ($issueRelations.length) {
        $issueRelations.prepend(templates['relations_header']());
      }
    }
  }
});