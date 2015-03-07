define(['lib/page_property_miner', 'vendor/keymaster', 'lib/local_storage'], function (ppp, key, ls) {
  return {
    init: function () {
      if (!ls.get('enabled:keyShortcuts')) {
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

      $('#q').keypress(function (e) {
        if (e.keyCode === 27) { // esc
          $(this).blur();
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

      key('i', 'go', function() {
        return linkFromMainMenu('issues');
      });

      key('w', 'go', function() {
        return linkFromMainMenu('wiki');
      });

      key('s', function () {
        $('#q').focus();
        return false;
      });

      key('p', function () {
        $('#s2id_project_quick_jump_box').select2("open");
        return false;
      });

      if (ppp.matchPage('issues', 'show')) {
        key('e', function() {
          $('.updateButton:eq(0)').click();
          return false;
        });
        key('esc', function() {
          $('#update').hide();
          return false;
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

      /*key('i', function() {
       return linkFromMainMenu('issues');
       });

       key('n', function() {
       return linkFromMainMenu('new-issue');
       });

       key('w', function() {
       return linkFromMainMenu('wiki');
       });

       key('p', function() {
       $('#s2id_project_quick_jump_box').select2("open");
       return false;
       });

       key('a', function() {
       return linkFromMainMenu('activity');
       });*/
    }
  }
});