"use strict";

define(['lib/page_property_miner','lib/local_storage'], function (ppp, ls) {

  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      var $update = $('#update');

      function toggleUpdateForm() {
        if ($update.hasClass('minimized')) {
          $update.removeClass('minimized');
          ls.remove('updateFormMinimized');
        } else {
          $update.addClass('minimized');
          ls.set('updateFormMinimized', true);
        }
      }

      $update.find('#issue_subject').closest('fieldset').addClass('issueAttributes');
      $update.find("#time_entry_hours").closest('fieldset').addClass('timeLogging');
      $update.find('#issue_notes').closest('fieldset').addClass('issueJournalNotes');

      // hide logging part of the form
      $update.find(".timeLogging").closest('fieldset').hide();

      // better functioning update, mainly on mobile
      $('.icon-edit').filter(function () {
        return $(this).attr('onclick') === 'showAndScrollTo("update", "issue_notes"); return false;';
      }).addClass('updateButton').attr('onclick', '');

      $('.updateButton').click(function (e) {
        e.preventDefault();
        $update.show();
        $('#issue_notes').focus();

        if (!$update.hasClass('minimized')) {
          $('html, body').animate({scrollTop: $('#issue-form').offset().top}, 100);
        }
      });


      $update.prepend('<span class="minimize"><span class="glyphicon glyphicon-minus"></span> <span class="glyphicon glyphicon-plus"></span></span>');
      $update.find('span.minimize').click(function () {
        toggleUpdateForm();
        return false;
      });
      if (ls.get('updateFormMinimized')) {
        $update.find('span.minimize').click();
      }

      // Remove delimiter for minimized form
      $('#issue-form')
        .contents()
        .filter(function() { return this.nodeType === 3 && this.textContent.trim() === '|'})
        .remove();
      $('<span class="delimiter"> | </span>').insertBefore('#issue-form a:last');
    }
  }
});