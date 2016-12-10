"use strict";

define({
  init: function () {
    // devicePixelRatio is not supported
    if (window.devicePixelRatio === undefined) {
      return;
    }

    if (window.devicePixelRatio === 2) {
      $('.gravatar').each(function () {
        var img = this;

        img.src = img.src.replace(/(size=)?([0-9]*)(x([0-9]*))?/, function (match, size, p1, p2, p3) {
          if (typeof size === 'undefined') {
            size = '';
          }

          // People module
          if (p3) {
            img.width = p1;
            img.height = p3;

            return size + (p1 * 2) + 'x' + (p3 * 2);

          // Gravatar
          } else {
            img.width = p1;
            img.height = p1;

            return size + (p1 * 2);
          }
        });
      })
    }
  }
});