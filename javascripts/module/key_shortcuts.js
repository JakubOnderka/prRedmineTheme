define(['lib/page_property_miner', 'lib/keymaster'], function (ppp, key) {
  return {
    init: function () {
      var $mainMenu = $('#main-menu');

      function linkFromMainMenu(type) {
        var href = $mainMenu.find('.' + type).attr('href');
        if (href) {
          window.location.href = href;
          return false;
        }
        return true;
      }

      if (ppp.matchPage('issues', 'show')) {
        key('e', function() {
          showAndScrollTo("update", "issue_notes");
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