"use strict";

define({
  init: function () {
    // devicePixelRatio is not supported
    if (window.devicePixelRatio === undefined) {
      return;
    }

    if (window.devicePixelRatio === 2) {
      var regexp = /size=([0-9]*)(x([0-9]*))?|\/([0-9]*)x([0-9]*)/;

      $('.gravatar').each(function () {
        var img = this;

        img.src = img.src.replace(regexp, function (match, p1, p2, p3, p4, p5) {
          var prefix = '';
          if (typeof p1 === 'undefined') {
            p1 = p4;
            p3 = p5;
            prefix = '/';
          } else {
            prefix = 'size=';
          }

          // People module
          if (p3) {
            img.width = p1;
            img.height = p3;

            return prefix + (p1 * 2) + 'x' + (p3 * 2);

          // Gravatar
          } else {
            img.width = p1;
            img.height = p1;

            return prefix + (p1 * 2);
          }
        });
      })
    }
  }
});