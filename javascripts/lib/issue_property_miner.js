define(['lib/page_property_miner'], function (ppp) {

  function getIdAndName($link) {
    if ($link.length === 0) {
      return null;
    }

    var href = $link.attr('href'),
      id = href.split('/')[2];

    return {
      id: id,
      name: $link.text()
    }
  }

  var properties;

  return function () {
    if (typeof properties !== 'undefined') {
      return properties;
    }

    if (!ppp.matchPage('issues', 'show')) {
      properties = null;
      return null;
    }

    var h1ChildNodes = $('h1')[0].childNodes,
      projectTitle = h1ChildNodes[h1ChildNodes.length - 1].textContent.replace(' » ', ''),
      rootProjectTitle = $('h1 .root').text(),
      h2Content = $('h2:eq(0)').text(),
      $issue = $('#content .issue:eq(0)'),
      title = $issue.find('h3').text(),
      authorLinks = $issue.find('p.author a'),
      issueDivClassList = $issue[0].className.split(/\s+/),
      dueDate = $issue.find('.due-date .value').text(),
      startDate = $issue.find('.start-date .value').text(),
      assignedTo = getIdAndName($issue.find('.assigned-to .value a'));

    var trackerId, statusId, priorityId, priorityType;
    for (var i = 0; i < issueDivClassList.length; i++) {
      var className = issueDivClassList[i];
      if (className.indexOf('tracker-') === 0) {
        trackerId = className.replace('tracker-', '');
      } else if (className.indexOf('status-') === 0) {
        statusId = className.replace('status-', '');
      } else if (className.indexOf('priority-') === 0) {
        var after = className.replace('priority-', '');
        if (/\d/.test(after)) {
          priorityId = after;
        } else {
          priorityType = after;
        }
      }
    }

    return properties = {
      id: h2Content.substr(h2Content.indexOf('#') + 1),
      title: title,

      projectName: ppp.getProjectName(),
      projectTitle: projectTitle,

      topProjectName: ppp.getTopProjectName(),
      topProjectTitle: rootProjectTitle,

      createdBy: getIdAndName($(authorLinks[0])),
      assignedTo: assignedTo,

      isCreatedByMe: $issue.hasClass('created-by-me'),
      isAssignedToMe: $issue.hasClass('assigned-to-me'),
      isOverDueDate: $issue.hasClass('overdue'),
      isClosed: $issue.hasClass('closed'),

      trackerId: trackerId,
      statusId: statusId,
      priority: {
        id: priorityId,
        type: priorityType
      },

      addedAt: authorLinks[1].title,
      actualizedAt: authorLinks[2] ? authorLinks[2].title : null,
      startDate: startDate,
      dueDate: dueDate
    };
  }
});