define(['lib/page_property_miner', 'vendor/keymaster', 'lib/local_storage'], function (ppp, key, ls) {
  return {
    init: function () {
      var $q = $('#q');

      if (!ls.get('enabled:keyShortcuts')) {
        if ($(window).width() > 640 && !ppp.matchPage('issues', 'show') && !this.isTouchDevice()) {
          $q.focus();
        }

        return;
      }

      var $mainMenu = $('#main-menu');

      function goTo(href) {
        window.location.href = href;
      }

      function link($element) {
        var href = $element.attr('href');
        if (href) {
          goTo(href);
          return false;
        }
        return true;
      }

      function linkFromMainMenu(type) {
        return link($mainMenu.find('.' + type));
      }

      $q.keypress(function (e) {
        if (e.keyCode === 27) { // esc
          $(this).blur();
          return false;
        }
      });

      /*
      Go
       */
      key('g', function() {
        key.setScope('go');

        setTimeout(function () {
          key.setScope('all');
        }, 1000);

        return false;
      });

      key('p', 'go', function () {
        goTo('/projects');
        return false;
      });

      key('o', 'go', function() {
        return linkFromMainMenu('overview');
      });

      key('i', 'go', function() {
        return linkFromMainMenu('issues');
      });

      key('w', 'go', function() {
        return linkFromMainMenu('wiki');
      });

      key('n', 'go', function() {
        return linkFromMainMenu('new-issue');
      });

      key('a', 'go', function() {
        return linkFromMainMenu('activity');
      });

      // Focus search input
      key('s', function () {
        $q.focus();
        return false;
      });

      // Focus project select
      key('p', function () {
        $('#s2id_project_quick_jump_box').select2('open');
        return false;
      });

      if (ppp.matchPage('issues', 'show')) {
        // Show edit issue form
        key('e', function () {
          $('.updateButton:eq(0)').click();
          return false;
        });

        // Hide update form on escape

        key('esc', function () {
          $('#update').hide();
          return false;
        });

        var $issueNotes = $('#issue_notes');
        $issueNotes.keypress(function (e) {
          if (e.keyCode === 27) { // esc
            $('#update').hide();
            $issueNotes.blur();
            return false;
          }
        });

        key('left', function () {
          var $first = $('#content .next-prev-links *').slice(0, 1);
          if ($first.is('a')) {
            return link($first);
          }
          return false;
        });

        key('right', function () {
          var $last = $('#content .next-prev-links *').slice(-1);
          if ($last.is('a')) {
            return link($last);
          }
          return false;
        });

      } else if (ppp.matchPage('issues', 'index')) {
        /*key('esc', function() {
         var $link = $('.buttons .icon-reload');
         if ($link.length > 0) {
         window.location.href = $link.attr('href');
         return false;
         }
         });*/

        key('left', function () {
          return link($('ul.pagination .prev'));
        });

        key('right', function () {
          return link($('ul.pagination .next'));
        });
      }
    },

    isTouchDevice: function () {
      return ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
    }
  }
});