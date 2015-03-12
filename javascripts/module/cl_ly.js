"use strict";

define(['lib/page_property_miner', 'lib/local_storage'], function (ppp, ls) {
  return {
    init: function () {
      if (!ppp.matchPage('issues', 'show')) {
        return;
      }

      if (ppp.getTopProjectName() !== 'baufinder') {
        return;
      }

      var self = this;

      $('#content').find('p > a').each(function () {
        var $a = $(this),
          href = $a.attr('href');
        if (href.indexOf('http://cl.ly/') === 0) {
          var data = ls.getJsonCache('clly', href);
          if (data) {
            self.processLink($a, data);
          } else {
            self.getData($a.attr('href'), function (data) {
              ls.setJsonCache('clly', href, data, 24);
              self.processLink($a, data);
            });
          }
        }
      });
    },


    getData: function(url, callback) {
      var settings = {
        headers: {
          'Accept': 'application/json'
        }
      };

      $.ajax('http://acci.cz/proxy/proxy.php?csurl=' + url, settings).done(function (data) {
        callback(data);
      });
    },

    processLink: function ($a, data) {
      if (data.item_type === 'image') {
        var image = new Image();
        image.src = data.remote_url;
        image.title = image.alt = data.name;

        $a.html(image);
        $a.attr('target', '_blank');
      }
    }
  }
});