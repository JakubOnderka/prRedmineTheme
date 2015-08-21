"use strict";

define(['lib/local_storage'], function (ls) {
  var $sidebar;

  return {
    init: function () {
      if (this.getSidebar().children().length > 0) {
        if (ls.get('sidebarHidden')) {
          this.hideSidebar();
        }

        this.getSidebar().before('<div class="toggleSidebar"><div class="border"></div><div class="text">&times;</div></div>');
        this.setListeners();
      }
    },

    setListeners: function () {
      var self = this;
      $('.toggleSidebar').click(function() {
        self.toggleSidebar();
      });
    },

    toggleSidebar: function () {
      if (this.getSidebar().is(':visible')) {
        this.hideSidebar();
        ls.set('sidebarHidden', true);

      } else {
        this.showSidebar();
        ls.remove('sidebarHidden');
      }
    },

    showSidebar: function () {
      this.getSidebar().show();
      $('.toggleSidebar .text').html('&times;');
      $('#main').removeClass('nosidebar');
    },

    hideSidebar: function () {
      this.getSidebar().hide();
      $('.toggleSidebar .text').html('&larr;');
      $('#main').addClass('nosidebar');
    },

    getSidebar: function () {
      if (!$sidebar) {
        $sidebar = $('#sidebar');
      }

      return $sidebar;
    }
  }
});