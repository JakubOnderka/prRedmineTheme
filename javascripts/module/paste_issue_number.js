"use strict";

define(['lib/local_storage'], function (ls) {

  function isIssueId(value) {
    if (value[0] === '#') {
      value = value.substr(1);
    }

    if (parseInt(value) == value) {
      return value;
    }

    return false;
  }

  function goToIssue(issueId) {
    window.location.href = "/issues/" + issueId;
  }

  return {
    init: function () {
      if (!ls.get('enabled:pasteIssueNumber')) {
        return;
      }

      $('#q').on('paste', function(e) {
        var content = e.originalEvent.clipboardData.getData('text'),
          issueId = isIssueId(content);

        if (issueId) {
          goToIssue(issueId);
        }
      });

      document.addEventListener('paste', function(e) {
        if (e.target.nodeName === 'INPUT' || e.target.nodeName === 'TEXTAREA') {
          return;
        }

        if (e.clipboardData.types.indexOf('text/plain') > -1) {
          var content = e.clipboardData.getData('text/plain'),
            issueId = isIssueId(content);

          if (issueId) {
            goToIssue(issueId);
          }
        }
      });
    }
  }
});