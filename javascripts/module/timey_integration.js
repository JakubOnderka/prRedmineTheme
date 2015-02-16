"use strict";

define(['lib/page_property_miner'], function (ppp) {
  return {

    init: function () {
      $('<div id="enterTimey" style="float: right"><a href="https://timey.proofreason.com" target="_blank">Open Timey</a></div>').insertBefore('#loggedas');

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

        var timeyLogger = '<div class="timeyLoggerWrapper"><span class="close"><i class="bootstrap-icon-remove"></i></span><iframe style="border:0; width: 100%; height: 220px" src="' +
          url + '"></iframe></div>';

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