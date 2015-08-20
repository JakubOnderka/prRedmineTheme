"use strict";

define(['lib/page_property_miner', 'templates', 'vendor/moment'], function (ppp, templates, moment) {
  return {
    init: function () {
      $(templates['make_money']()).insertBefore('#loggedas');

      if ($('body').hasClass('project-chci-praci') && ppp.matchPage('issues', 'new')) {
        var nextMonday = moment().add(1, 'weeks').startOf('isoWeek').format('D. M.');

        $('#issue_subject').val('Příští týden (od ' + nextMonday + '.) mám X hodin času');

        var $allAttributes = $('#all_attributes');
        $allAttributes.find('#issue_subject').closest('p').css('display', 'block');
        $allAttributes.find('#issue_description_and_toolbar').closest('p').css('display', 'block');
        $allAttributes.find('#issue_description_and_toolbar textarea').attr('placeholder', 'Upřesněte případné detaily.');
      }
    }
  }
});