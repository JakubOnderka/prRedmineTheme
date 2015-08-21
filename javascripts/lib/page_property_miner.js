"use strict";

define(['lib/redmine_api'], function(RedmineApi) {
  return {
    projectId: null,
    issueId: null,
    userId: null,
    lang: null,

    matchPage: function (controller, action) {
      // For browser with support classList
      var bodyClassList = document.body.classList;
      if (bodyClassList) {
        return bodyClassList.contains('controller-' + controller) && bodyClassList.contains('action-' + action);
      }

      var $body = $('body');
      return $body.hasClass('controller-' + controller) && $body.hasClass('action-' + action);
    },

    getProjectName: function() {
      var bodyClassList = document.body.className.split(/\s+/);
      for (var i = 0; i < bodyClassList.length; i++) {
        var className = bodyClassList[i];
        if (className.indexOf('project-') === 0) {
          return className.substr(8);
        }
      }

      return false;
    },

    getTopProjectName: function() {
      var $root = $('#header').find('h1 .root');
      if ($root.size()) {
        var href = $root.attr('href');
        return href.split('/')[2].split('?')[0];
      } else {
       return this.getProjectName();
      }
    },

    getProjectId: function (callback) {
      if (this.projectId === null) {
        if (this.matchPage('issues', 'show')) {
          this.projectId = $('#issue_project_id option[selected="selected"]').val();
          callback(this.projectId);
        } else {
          var redmineApi = new RedmineApi(),
            self = this;

          redmineApi.getProject(this.getProjectName(), function (data) {
            self.projectId = data.project.id;
            callback(self.projectId);
          });
        }
      } else {
        callback(this.projectId);
      }
    },

    getIssueId: function () {
      if (this.issueId === null) {

        if (this.matchPage('issues', 'show')) {
          if ($('h2').eq(0).text().match(/^.+\#([0-9]+)/)) {
            this.issueId = /^.+\#([0-9]+)/.exec($('h2').eq(0).text()).pop();
          }
        }

        if (this.matchPage('timelog', 'new')) {
          var $issueId = $('#issue_id');
          /*if ($('input[name="back_url"]').attr('value').match(/^.+issues\/([0-9]+)\/?$/)) {
            this.issueId = /^.+issues\/([0-9]+)\/?$/.exec($('input[name="back_url"]').attr('value')).pop();
          }*/
          if ($issueId.length) {
            this.issueId = $issueId.val();
          }
        }

        if (console) console.log('issue id recognized: ' + this.issueId);
      }

      return this.issueId;
    },

    getUserId: function () {
      if (this.userId === null) {
        this.userId = /users\/([0-9]+)$/.exec($('#loggedas a').attr('href')).pop();

        if (console) console.log('user id recognized: ' + this.userId);
      }

      return this.userId;
    },

    debug: function () {
      this.getProjectId(function (projectId) {
        if (console) console.log('Project ID recognized: ' + projectId);
      });
      this.getIssueId();
      this.getUserId();
    }
  }
});
