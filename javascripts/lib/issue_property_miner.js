define(['lib/page_property_miner'], function (ppp) {
  if (!ppp.matchPage('issues', 'show')) {
    return function () {
      return null;
    };
  }

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
    if (properties) {
      return properties;
    }

    var h2Content = $('h2').text(),
      $issueDiv = $('div.issue'),
      authorLinks = $issueDiv.find('p.author a'),
      issueDivClassList = $issueDiv[0].className.split(/\s+/),
      dueDate = $issueDiv.find('td.due-date').text(),
      startDate = $issueDiv.find('td.start-date').text(),
      assignedTo = getIdAndName($issueDiv.find('td.assigned-to a'));

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
      projectName: ppp.getProjectName(),

      createdBy: getIdAndName($(authorLinks[0])),
      assignedTo: assignedTo,

      isCreatedByMe: $issueDiv.hasClass('created-by-me'),
      isAssignedToMe: $issueDiv.hasClass('assigned-to-me'),
      isOverDueDate: $issueDiv.hasClass('overdue'),

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