"use strict";

define(['lib/page_property_miner', 'lib/local_storage', 'lib/replace_issue_form_proxy'], function (ppp, ls, proxy) {
  return {
    init: function () {
      if (!ls.get('enabled:localize')) {
        return;
      }

      var lang = $('html').attr('lang'),
        self = this;

      if (lang !== 'cs') {
        return;
      }

      if (ppp.matchPage('issues', 'show')) {
        this.localizeElementContent($('.issue td.status'));
        this.localizeElementContent($('.issue td.priority'));

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
      text = this.extractCzechVersion(text);
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
    }
  }
});