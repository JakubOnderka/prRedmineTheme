define([
  'vendor/moment',
  'lib/redmine_api',
  'lib/page_property_miner',
  'templates',
  'lib/local_storage'
], function (moment, RedmineApi, ppp, templates, ls) {

  /**
   * Sort issues by due date and updated on
   * @param issues
   */
  function sortIssues(issues) {
    issues.sort(function(a, b) {
      if (!a.due_date && !b.due_date) {
        return moment(b.updated_on).diff(a.updated_on);
      } else if (!a.due_date) {
        return 1;
      } else if (!b.due_date) {
        return -1;
      }

      return moment(a.due_date).diff(b.due_date);
    });
  }

  return {
    init: function() {

      if (!ppp.matchPage('projects', 'show')) {
        return;
      }

      if (!ls.get('enabled:issues_project')) {
        return;
      }

      var redmineApi = new RedmineApi(),
        projectName = ppp.getProjectName();

      $('#content .splitcontentright')
        .prepend(templates['issues_project']())
        .css('width', '70%');

      $('#content .splitcontentleft')
        .css('width', '28%');

      ProofReasonRedmineTheme.BetterSidebar.hideSidebar();

      redmineApi.getIssuesWithCache({
        project_id: projectName,
        assigned_to_id: 'me',
        sort: 'due_date:desc,updated_on:desc',
        limit: 20
      }, function (data) {
        sortIssues(data.issues);

        var html = templates['issues']({
          issues: data.issues,
          withProject: false,
          withAssigned: false
        });

        $('#my-issues-content').html(html);

        ProofReasonRedmineTheme.AlternateCellFormats.init();
      });

      redmineApi.getIssuesWithCache({
        project_id: projectName,
        due_date: '<=' + moment().format('YYYY-MM-DD'),
        sort: 'due_date:desc',
        limit: 20
      }, function(data) {
        sortIssues(data.issues);

        var html = templates['issues']({
          issues: data.issues,
          withProject: false,
          withAssigned: true
        });

        $('#due-date-issues-content').html(html);

        ProofReasonRedmineTheme.AlternateCellFormats.init();
      });
    }
  }

});