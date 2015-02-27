"use strict";

define(function () {
  $('body').on('focus', '.hasDatepicker', function() {
    $(this).datepicker('show');
  });
});