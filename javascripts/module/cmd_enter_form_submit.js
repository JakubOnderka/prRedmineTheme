"use strict";

define(function () {
  return {
    init: function () {
      $(document).on('keydown', 'textarea#issue_notes, textarea#issue_description', function (event) {
        if (event.keyCode === 13 && (event.metaKey || event.ctrlKey)) {
          // Disable showing warning message
          window.onbeforeunload = null;

          $(this).parents('form').submit();
          event.preventDefault();
        }
      });
    }
  }
});