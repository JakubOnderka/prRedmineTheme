"use strict";

define(['lib/local_storage', 'lib/add_style'], function (ls, addStyle) {
  var $sidebar,
    hiddenOnLoad = ls.get('sidebarHidden'),
    style;

  if (hiddenOnLoad) {
    // For faster hide sidebar
    style = addStyle('#sidebar {display:none}#main #content{padding-right:15px}');
  }

  return {
    init: function () {
      if (this.getSidebar().children().length > 0) {
        this.getSidebar().before('<div class="toggleSidebar"><div class="border"></div><div class="text">&times;</div></div>');

        if (hiddenOnLoad) {
          this.hideSidebar();
        }

        if (style) {
          style.parentNode.removeChild(style);
        }

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
      $('#main').addClass('nosidebar');
      $('.toggleSidebar .text').html('&larr;');
    },

    getSidebar: function () {
      if (!$sidebar) {
        $sidebar = $('#sidebar');
      }

      return $sidebar;
    }
  }
});