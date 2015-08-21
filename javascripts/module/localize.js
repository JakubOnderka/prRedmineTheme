"use strict";

define(['lib/page_property_miner', 'lib/local_storage', 'lib/replace_issue_form_proxy'], function (ppp, ls, proxy) {
  var lang;

  return {
    init: function () {
      if (!ls.get('enabled:localize')) {
        return;
      }

      lang = document.documentElement.lang;

      var self = this;

      if (ppp.matchPage('issues', 'show')) {
        this.localizeElementContent($('.issue .attributes td.status'));
        this.localizeElementContent($('.issue .attributes td.priority'));

        var localizeForm = function() {
          self.localizeSelect($('#issue_status_id'));
          self.localizeSelect($('#issue_priority_id'));
        };
        localizeForm();
        proxy(localizeForm);
      }
    },

    localizeSelect: function($element) {
      var self = this;
      $element.find('option').each(function () {
        self.localizeElementContent($(this));
      });
    },

    localizeElementContent: function($element) {
      var text = $element.text();
      if (lang === 'cs') {
        text = this.extractCzechVersion(text);
      } else {
        text = this.extractEnglishVersion(text);
      }
      if (text) {
        $element.text(text);
      }
    },

    extractCzechVersion: function(value) {
      var parts = value.split('/');
      if (parts.length === 2) {
        return parts[0].trim();
      }
      return false;
    },

    extractEnglishVersion: function(value) {
      var parts = value.split('/');
      if (parts.length === 2) {
        return parts[1].trim();
      }
      return false;
    }
  }
});