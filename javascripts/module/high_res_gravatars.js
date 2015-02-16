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

        img.src = img.src.replace(/size=([0-9]*)/, function (match, contents) {
          img.width = contents;
          img.height = contents;

          return 'size=' + (contents * 2);
        });
      })
    }
  }
});