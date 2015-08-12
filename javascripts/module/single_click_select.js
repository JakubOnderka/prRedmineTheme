"use strict";

define(['lib/page_property_miner'], function (ppp) {
  return {
    init: function () {
      this.issueId();
      this.codeElement();
    },

    issueId: function () {
      if (ppp.matchPage('issues', 'show')) {
        $('#content h2:eq(0)').click(function () {
          for (var i = 0; i < this.childNodes.length; i++) {
            if (this.childNodes[i] instanceof Text) {
              var element = this.childNodes[i],
                startChar = element.nodeValue.indexOf('#'),
                endChar = element.nodeValue.length,
                range = document.createRange();

              range.setStart(element, startChar);
              range.setEnd(element, endChar);

              window.getSelection().removeAllRanges();
              window.getSelection().addRange(range);
              break;
            }
          }
        });
      }
    },

    codeElement: function () {
      var lastMouseDownX = null,
        lastMouseDownY = null,
        $body = $('body');

      $body.on('mousedown', 'code', function (event) {
        lastMouseDownX = event.clientX;
        lastMouseDownY = event.clientY;
      });

      $body.on('mouseup', 'code', function (event) {
        if (lastMouseDownX === null || lastMouseDownX !== event.clientX || lastMouseDownY !== event.clientY) {
          return;
        }

        var element = this.childNodes[0];

        if (!element.nodeValue) {
          return;
        }

        var range = document.createRange();
        range.setStart(element, 0);
        range.setEnd(element, element.nodeValue.length);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        lastMouseDownX = lastMouseDownY = null;
      });
    }
  }
});