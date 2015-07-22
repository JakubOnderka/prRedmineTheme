"use strict";

define(['lib/page_property_miner', 'templates'], function (ppp, templates) {
  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      var $issue = $('#content .issue'),
        $relations = $issue.find('#relations'),
        $issueTree = $issue.find('#issue_tree table.list.issues'),
        $issueRelations = $relations.find('table.list.issues');

      function update() {
        if ($issueTree.length && $issueTree.find('thead').length === 0) {
          $issueTree.prepend(templates['issue_tree_header']());
        }

        if ($issueRelations.length && $issueRelations.find('thead').length === 0) {
          $issueRelations.prepend(templates['relations_header']());
        }
      }

      update();

      $relations.on('ajax:success', '#new-relation-form', function () {
        update();
      });

      $relations.on('change', '#relation_issue_to_id', function () {
        update();
      });
    }
  }
});