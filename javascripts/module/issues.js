define([
  'vendor/moment',
  'lib/redmine_api',
  'lib/page_property_miner',
  'templates',
  'lib/local_storage',
  'module/alternate_cell_format',
  'module/better_sidebar',
  'lib/add_style'
], function (moment, RedmineApi, ppp, templates, ls, alternateCellFormat, betterSidebar, addStyle) {

  if (ls.get('enabled:issues_project')) {
    var style = [
      'body.controller-projects.action-show #content .splitcontentleft {width:28%}',
      'body.controller-projects.action-show #content .splitcontentright {width:70%;margin-top:-30px}',
      'body.controller-welcome.action-index #content .splitcontentleft {width:38%;}',
      'body.controller-welcome.action-index #content .splitcontentright {width:60%;}'
    ];
    addStyle(style.join(''));
  }

  function loadScript(url, callback) {
    var head = document.getElementsByTagName('head')[0],
      script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = url;
    script.async = true;

    script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script);
  }

  function loadStyle(url) {
    var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');

    link.rel = 'stylesheet';
    link.media = 'screen';
    link.href = url;

    head.appendChild(link);
  }

  function initContextual() {
    loadScript('/javascripts/context_menu.js', function () {
      contextMenuInit('/issues/context_menu');
    });
    loadStyle('/stylesheets/context_menu.css');
  }

  /**
   * Sort issues by due date and updated on
   * @param issues
   */
  function sortIssues(issues) {
    issues.sort(function (a, b) {
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

  function myIssues(data, withProject) {
    sortIssues(data.issues);

    var html = templates['issues']({
      issues: data.issues,
      withProject: withProject,
      withAssigned: false,
      count: data.total_count
    });

    var $myIssues = $('#my-issues'),
      $selectRandom = $myIssues.find('.select-random');

    $myIssues.find('.content').html(html);
    $myIssues.find('.count').html(data.total_count);

    if (data.total_count === 0) {
      $selectRandom.hide();
    } else {
      $selectRandom.show();
    }

    $selectRandom.click(function () {
      var issuePosition = Math.floor(Math.random() * data.issues.length),
        issueId = data.issues[issuePosition].id,
        url = '/issues/' + issueId;

      $(this).attr('href', url);
    });

    alternateCellFormat.init();
  }

  var redmineApi;

  return {
    init: function () {
      if (!ls.get('enabled:issues_project')) {
        return;
      }

      redmineApi = new RedmineApi();

      if (ppp.matchPage('projects', 'show')) {
        this.project();

      } else if (ppp.matchPage('welcome', 'index')) {
        this.welcome();
      }
    },

    project: function () {
      betterSidebar.hideSidebar();

      $('#content .splitcontentright').prepend(templates['issues_project']());

      var projectName = ppp.getProjectName();
      redmineApi.getIssuesWithCache({
        project_id: projectName,
        assigned_to_id: 'me',
        sort: 'due_date:desc,updated_on:desc',
        limit: 20
      }, function (data) {
        myIssues(data, false);
      });

      redmineApi.getIssuesWithCache({
        project_id: projectName,
        due_date: '<=' + moment().format('YYYY-MM-DD'),
        sort: 'due_date:desc',
        limit: 20
      }, function (data) {
        sortIssues(data.issues);

        var html = templates['issues']({
          issues: data.issues,
          withProject: false,
          withAssigned: true
        });

        $('#due-date-issues .content').html(html);

        alternateCellFormat.init();
      });
    },

    welcome: function () {
      $('#content .splitcontentright').prepend(templates['issues_welcome']());

      redmineApi.getIssuesWithCache({
        assigned_to_id: ppp.getUserId(),
        sort: 'due_date:desc,updated_on:desc',
        limit: 20
      }, function (data) {
        myIssues(data, true);
      });
    }
  }
});