"use strict";

define(['lib/local_storage'], function (ls) {
  var $sidebar;

  return {
    init: function () {
      $sidebar = $('#sidebar');

      if ($sidebar.children().length > 0) {
        $sidebar.before('<div class="toggleSidebar"><div class="border"></div><div class="text">&times;</div></div>');
      }

      if (ls.get('sidebarHidden')) {
        this.hideSidebar();
      }

      this.setListeners();
    },

    setListeners: function () {
      var self = this;
      $('.toggleSidebar').click(function() {
        self.toggleSidebar();
      });
    },

    toggleSidebar: function () {
      if ($sidebar.is(':visible')) {
        this.hideSidebar();
        ls.set('sidebarHidden', true);

      } else {
        this.showSidebar();
        ls.remove('sidebarHidden');
      }
    },

    showSidebar: function () {
      $sidebar.show();
      $('.toggleSidebar .text').html('&times;');
      $('#main').removeClass('nosidebar');
    },

    hideSidebar: function () {
      $sidebar.hide();
      $('.toggleSidebar .text').html('&larr;');
      $('#main').addClass('nosidebar');
    }
  }
});