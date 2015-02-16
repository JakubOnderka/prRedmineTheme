define(['lib/page_property_miner'], function (ppp) {

  var h2Content = $('h2').text(),
    $issueDiv = $('div.issue'),
    authorLinks = $issueDiv.find('p.author a'),
    issueDivClassList = $issueDiv[0].className.split(/\s+/),
    dueDate = $issueDiv.find('td.due-date').text(),
    startDate = $issueDiv.find('td.start-date').text(),
    assignedTo = $issueDiv.find('td.assigned-to a').text();

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

  return {
    id: h2Content.substr(h2Content.indexOf('#') + 1),
    projectName: ppp.getProjectName(),

    createdBy: authorLinks[0].textContent,
    assignedTo: assignedTo,

    isCreatedByMe: $issueDiv.hasClass('created-by-me'),
    isAssignedToMe: $issueDiv.hasClass('assigned-to-me'),
    isOverDueDate: $issueDiv.hasClass('overdue'),

    trackerId: trackerId,
    statusId: statusId,
    priorityId: priorityId,
    priorityType: priorityType,

    addedAt: authorLinks[1].title,
    actualizedAt: authorLinks[2] ? authorLinks[2].title : null,
    startDate: startDate,
    dueDate: dueDate
  };
});