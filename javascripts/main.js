"use strict";

require(['vendor/moment'], function (moment) {
  var language = document.documentElement.lang;
  if (language === 'cs') {
    moment.locale(language);
  }
}, null, true);

// Register handlebars helpers
require([
  'template/helper/translate',
  'template/helper/dayFromDate',
  'template/helper/trim',
  'template/helper/is',
  'template/helper/isEven',
  'template/helper/isNotEmpty',
  'template/helper/monthFromDate',
  'template/helper/redmineTime'
], null, null, true);

require([
  'module/remove_issue_type_from_title',
  'module/high_res_gravatars',
  'module/better_sidebar',
  'module/timey_integration',
  'module/related_issues_header',
  'module/absences',
  'module/better_header',
  'module/key_shortcuts',
  'module/issues',
  'module/last_issue',
  'module/localize',
  'module/alternate_cell_format',
  'module/paste_issue_number',
  'module/checkbox',
  'module/cl_ly',
  'module/attachments',
  'module/issue_update_form',
  'module/clickable_issue_names',
  'module/make_money',
  'module/better_timeline',
  'module/czech_date_fix'
], function () {
  var modules = arguments;

  $(function () {
    if (console) console.log('DOM ready');

    for (var i = 0; i < modules.length; i++) {
      var module = modules[i];
      if (module && module.init) {
        module.init();
      }
    }

    if (console) console.log('Initialized all modules');
  });
}, null, true);

// Can wait modules
require([
  'module/single_click_select',
  'module/autologin',
  'module/auto_return_to_owner',
  'module/cmd_enter_form_submit',
  'module/assign_select_author',
  'module/datepicker_focus',
  'module/fix_context_menu'
], function () {
  var modules = arguments;

  $(function () {
    for (var i = 0; i < modules.length; i++) {
      var module = modules[i];
      if (module && module.init) {
        module.init();
      }
    }

    if (console) console.log('Initialized can wait modules');
  });
});

// Deleting expired cache can wait
setTimeout(function () {
  require(['lib/local_storage'], function (module) {
    if (Math.random() > 0.9) {
      if (console) console.log('Deleted expired cached entries in localStorage.');
      module.removeExpired();
    }
  });
}, 100);


var ProofReasonRedmineTheme = {
  init: function () {
    this.ZenMode.init();
    this.MobileRedmine.init();
  },

  ZenMode: {
    init: function () {
      $('<div id="enterZenMode" style="float: right"><a href="#">Zen mode</a></div>').insertBefore('#loggedas');
      $('<a id="exitZenMode" href="#">&#9775; Exit zen</a>').appendTo('#main>#content>.contextual');

      // toggle zen mode - cookie intentionally not implemented
      $('body').on('click', '#enterZenMode', function () {
        $('body').addClass('zenMode');
        return false;

      }).on('click', '#exitZenMode', function () {
        $('body').removeClass('zenMode');
        return false;
      });
    }
  },

  MobileRedmine: {
    init: function () {
      $('body').addClass('mobileRedmine');
      $('head').append('<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">');
      if ($(window).width() <= 480) {
        // just for beta testing, it should be rather prevented than destroyed
        setTimeout(function () {
          $('#project_quick_jump_box').select2('destroy')
        }, 300);
      }
      $('#footer .bgr').append('<br><a id="backToDestop" href="javascript:ProofReasonRedmineTheme.MobileRedmine.remove()">Back to desktop mode</a>');
    },
    remove: function () {
      $('#backToDestop').remove();
      $('body').removeClass('mobileRedmine');
      $('head meta[name="viewport"]').remove();
      $('#project_quick_jump_box').select2();
    }
  }
};

$(function () {
  ProofReasonRedmineTheme.init();
  if (console) console.log('Initialized old theme');
});
