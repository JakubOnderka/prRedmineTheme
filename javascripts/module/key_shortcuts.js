define(['lib/page_property_miner', 'vendor/keymaster', 'lib/local_storage'], function (ppp, key, ls) {
  return {
    init: function () {
      var $q = $('#q');

      if (!ls.get('enabled:keyShortcuts')) {
        if ($(window).width() > 640 && !ppp.matchPage('issues', 'show')) {
          $q.focus();
        }

        return;
      }

      var $mainMenu = $('#main-menu');

      function goTo(href) {
        window.location.href = href;
      }

      function linkFromMainMenu(type) {
        var href = $mainMenu.find('.' + type).attr('href');
        if (href) {
          goTo(href);
          return false;
        }
        return true;
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
        key('e', function() {
          $('.updateButton:eq(0)').click();
          return false;
        });

        // Hide update form on escape
        key('esc', function() {
          $('#update').hide();
          return false;
        });
        $('#issue_notes').keypress(function (e) {
          if (e.keyCode === 27) { // esc
            $('#update').hide();
            return false;
          }
        });

        /*key('left', function() {
         $('#content .next-prev-links a').each(function() {
         if ($(this).text() == '« Předchozí') {
         window.location.href = $(this).attr('href');
         }
         });
         return false;
         });
         key('right', function() {
         $('#content .next-prev-links a').each(function() {
         if ($(this).text() == 'Další »') {
         window.location.href = $(this).attr('href');
         }
         });
         return false;
         });*/

      } else if (ppp.matchPage('issues', 'index')) {
        /*key('esc', function() {
         var $link = $('.buttons .icon-reload');
         if ($link.length > 0) {
         window.location.href = $link.attr('href');
         return false;
         }
         });

         key('left', function() {
         var href = $('ul.pagination .prev').attr('href');
         if (href) {
         window.location.href = href;
         }
         return false;
         });

         key('right', function() {
         var href = $('ul.pagination .next').attr('href');
         if (href) {
         window.location.href = href;
         }
         return false;
         });*/
      }

      /*

       key('n', function() {
       return linkFromMainMenu('new-issue');
       });



       key('a', function() {
       return linkFromMainMenu('activity');
       });*/
    }
  }
});