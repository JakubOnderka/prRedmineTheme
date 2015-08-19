"use strict";

define(['lib/page_property_miner', 'templates'], function (ppp, templates) {
  return {

    init: function () {
      $(templates['open_timey']()).insertBefore('#loggedas');

      if (ppp.matchPage('timelog', 'new')) {
        this.insertTimeyLogger();

      } else if (ppp.matchPage('timelog', 'index')) {
        $('#context-menu').remove();
        $('td.buttons').hide();
      }

      var self = this;
      $('#main>#content>.contextual .icon-time-add, .timeySwitch').click(function () {
        self.insertTimeyLogger();
        return false;
      });
    },

    insertTimeyLogger: function () {
      var self = this;
      ppp.getProjectId(function (projectId) {
        var issueId = ppp.getIssueId();

        var url = 'https://timey.proofreason.com/';
        if (projectId > 0) {
          url = url + '?redmine[project_id]=' + projectId;
          if (issueId > 0) url = url + '&redmine[issue_id]=' + issueId;
        }
        url = url + '#/logs/new';

        var timeyLogger = templates['timey_logger']({
          url: url
        });

        if (ppp.matchPage('timelog', 'new')) {
          $('#new_time_entry').after(timeyLogger).hide();

        } else if (ppp.matchPage('issues', 'show')) {
          $('body').append(timeyLogger);
          $('.timeyLoggerWrapper .close').click(function () {
            self.removeTimeyLogger();
          });
        }
      });
    },

    removeTimeyLogger: function () {
      $('.timeyLoggerWrapper').remove();
    }
  }
});