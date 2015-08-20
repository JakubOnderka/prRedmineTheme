"use strict";

require(['vendor/moment'], function (moment) {
  var language = $('html').attr('lang');
  if (language === 'cs') {
    moment.locale(language);
  }
});

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
]);

require([
  'module/remove_issue_type_from_title',
  'module/high_res_gravatars',
  'module/autologin',
  'module/key_shortcuts',
  'module/timey_integration',
  'module/related_issues_header',
  'module/absences',
  'module/assign_select_author',
  'module/datepicker_focus',
  'module/cmd_enter_form_submit',
  'module/better_header',
  'module/issues',
  'module/last_issue',
  'module/localize',
  'module/alternate_cell_format',
  'module/paste_issue_number',
  'module/checkbox',
  'module/cl_ly',
  'module/auto_return_to_owner',
  'module/attachments',
  'module/issue_update_form',
  'module/single_click_select',
  'module/better_sidebar',
  'module/clickable_issue_names'
], function () {

  for (var i = 0; i < arguments.length; i++) {
    (function(module) {
      if (module && module.init) {
        $(function () {
          module.init();
        });
      }
    })(arguments[i]);
  }
});

require(['lib/local_storage'], function (module) {
  if (Math.random() > 0.9) {
    if (console) console.log('Deleted expired cached entries in localStorage.');
    module.removeExpired();
  }
});


var ProofReasonRedmineTheme = {
  init: function () {
    this.BetterTimeline.init();
    this.BetterIssuesContextualMenu.init();
    this.ZenMode.init();
    this.MobileRedmine.init();
    this.MakeMoney.init();
  },

  debug: function () {
    this.PagePropertyMiner.debug();
  },

  PagePropertyMiner: {
    projectId: null,
    issueId: null,
    userId: null,
    lang: null,

    matchPage: function (controller, action) {
      var body = $('body');

      if (body.hasClass('controller-' + controller) && body.hasClass('action-' + action)) {
        return true;
      }

      return false;
    },

    getProjectId: function (callback) {
      if (this.projectId === null) {
        if (this.matchPage('issues', 'show')) {
          this.projectId = $('#issue_project_id option[selected="selected"]').val();
          callback(this.projectId);
        } else {
          var redmineApi = new RedmineApi(),
            url = $('#project_quick_jump_box option[selected="selected"]').val(),
            textProjectId = url.split('/')[2].split('?')[0],
            self = this;

          redmineApi.getProject(textProjectId, function (data) {
            self.projectId = data.project.id;
            callback(self.projectId);
          });
        }
      } else {
        callback(this.projectId);
      }
    },

    getIssueId: function () {
      if (this.issueId === null) {

        if (this.matchPage('issues', 'show')) {
          if ($('h2').eq(0).text().match(/^.+\#([0-9]+)/)) {
            this.issueId = /^.+\#([0-9]+)/.exec($('h2').eq(0).text()).pop();
          }
        }

        if (this.matchPage('timelog', 'new')) {
          if ($('input[name="back_url"]').attr('value').match(/^.+issues\/([0-9]+)\/?$/)) {
            this.issueId = /^.+issues\/([0-9]+)\/?$/.exec($('input[name="back_url"]').attr('value')).pop();
          }
        }

        console.log('issue id recognized: ' + this.issueId);
      }

      return this.issueId;
    },

    getUserId: function () {
      if (this.userId === null) {
        this.userId = /users\/([0-9]+)$/.exec($('#loggedas a').attr('href')).pop();

        console.log('user id recognized: ' + this.userId);
      }

      return this.userId;
    },

    assessUsedLanguage: function () {
      if (this.lang === null) {

        if ($('#top-menu a.home').text() == 'Úvodní') {
          this.lang = 'cs';
        } else {
          this.lang = 'en';
        }

        console.log('used language recognized: ' + this.lang);
      }

      return this.lang;
    },

    debug: function () {
      this.getProjectId(function (projectId) {
        console.log('Project ID recognized: ' + projectId);
      });
      this.getIssueId();
      this.getUserId();
      this.assessUsedLanguage();
    }

  },

  BetterTimeline: {
    init: function () {
      //simplified timeline in issues
      $('#history>.journal').addClass('peekable');
      $('#history .wiki').closest('.journal').removeClass('peekable');
      $('#history h3').append(' <a href="#" class="showStatusChanges">(show all issue status changes)</a>');
      $('.peekable').click(function () {
        $(this).removeClass('peekable');
      });

      $('#history h3 a').click(function () {
        $('#history>.journal').removeClass('peekable');
        $('.showStatusChanges').hide();
        return false;
      });
    }
  },

  MakeMoney: {
    ppm: null,

    init: function () {
      this.ppm = ProofReasonRedmineTheme.PagePropertyMiner;

      $('<div id="makeMoney" style="float: right"><a href="/projects/chci-praci/issues/new?issue[assigned_to_id]=79&issue[priority_id]=5">Chci práci!</a></div>').insertBefore('#loggedas');

      if ($('body').hasClass('project-chci-praci') && this.ppm.matchPage('issues', 'new')) {
        var nextMonday = this.getNextMonday();
        $('#issue_subject').val('Příští týden (od ' + nextMonday.getDate() + '. ' + (nextMonday.getMonth() + 1) + '.) mám X hodin času');

        $('.splitcontentleft, .splitcontentright').css({'float': 'none', 'width': 'auto', 'margin': '0'});
        $('#all_attributes p, #attachments_form, #watchers_form, input[name="continue"], a:contains("Preview")').hide();
        $('#all_attributes #issue_subject').closest('p').show();
        $('#all_attributes #issue_description_and_toolbar').closest('p').show();
        $('#all_attributes #issue_description_and_toolbar textarea').attr('placeholder', 'Upřesněte případné detaily.');
        $('#all_attributes #issue_due_date').closest('p').show();
      }
    },

    getNextMonday: function () {
      var today = new Date();
      var weekday = today.getDay() || 7;
      if (weekday !== 1) today.setDate(-(weekday) + 7);
      return today;
    }
  },

  ZenMode: {
    init: function () {
      $('<div id="enterZenMode" style="float: right"><a href="#">Zen mode</a></div>').insertBefore('#loggedas');
      $('<a id="exitZenMode" href="#">&#9775; Exit zen</a>').appendTo('#main>#content>.contextual');

      // toggle zen mode - cookie intentionally not implemented
      $('body').on('click', '#enterZenMode', function () {
        $('body').addClass('zenMode');
        return false;
      });
      $('body').on('click', '#exitZenMode', function () {
        $('body').removeClass('zenMode');
        return false;
      });
    }
  },

  BetterIssuesContextualMenu: {
    init: function () {
      var menu = document.getElementById('context-menu');
      if (menu) {
        menu.parentNode.removeChild(menu);
        document.body.appendChild(menu);
      }
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

$(function() {
  ProofReasonRedmineTheme.init();
});









//    ##       #### ########   ######
//    ##        ##  ##     ## ##    ##
//    ##        ##  ##     ## ##
//    ##        ##  ########   ######
//    ##        ##  ##     ##       ##
//    ##        ##  ##     ## ##    ##
//    ######## #### ########   ######

//http://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates-using-javascript
function daysFromToday(date) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = (new Date()).getTime();
    var date2_ms = date.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY) + 1;

}

//http://stackoverflow.com/questions/848797/yellow-fade-effect-with-jquery/13106698#13106698
jQuery.fn.highlight = function () {
    $(this).each(function () {
        var el = $(this);

        if (!el.is(':visible')) {
          return;
        }

        var fadingEl = $("<div/>")
        .width(el.outerWidth())
        .height(el.outerHeight())
        .css({
            "position": "absolute",
            "left": el.offset().left,
            "top": el.offset().top,
            "background-color": "#ffff99",
            "opacity": ".7",
            "z-index": "9999999"
        }).appendTo('body');

        setTimeout(function () {
          fadingEl.fadeOut(1500).queue(function () {
            fadingEl.remove();
          });
        }, 1000);
    });
};

// JavaScript Relative Time Helpers
// The MIT License
// Copyright (c) 2009 James F. Herdman
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


/**
 * Returns a description of this date in relative terms.

 * Examples, where new Date().toString() == "Mon Nov 23 2009 17:36:51 GMT-0500 (EST)":
 *
 * new Date().toRelativeTime()
 * --> 'Just now'
 *
 * new Date("Nov 21, 2009").toRelativeTime()
 * --> '2 days ago'
 *
 * new Date("Nov 25, 2009").toRelativeTime()
 * --> '2 days from now'
 *
 * // One second ago
 * new Date("Nov 23 2009 17:36:50 GMT-0500 (EST)").toRelativeTime()
 * --> '1 second ago'
 *
 * toRelativeTime() takes an optional argument - a configuration object.
 * It can have the following properties:
 * - now - Date object that defines "now" for the purpose of conversion.
 *         By default, current date & time is used (i.e. new Date())
 * - nowThreshold - Threshold in milliseconds which is considered "Just now"
 *                  for times in the past or "Right now" for now or the immediate future
 * - smartDays - If enabled, dates within a week of now will use Today/Yesterday/Tomorrow
 *               or weekdays along with time, e.g. "Thursday at 15:10:34"
 *               rather than "4 days ago" or "Tomorrow at 20:12:01"
 *               instead of "1 day from now"
 *
 * If a single number is given as argument, it is interpreted as nowThreshold:
 *
 * // One second ago, now setting a now_threshold to 5 seconds
 * new Date("Nov 23 2009 17:36:50 GMT-0500 (EST)").toRelativeTime(5000)
 * --> 'Just now'
 *
 * // One second in the future, now setting a now_threshold to 5 seconds
 * new Date("Nov 23 2009 17:36:52 GMT-0500 (EST)").toRelativeTime(5000)
 * --> 'Right now'
 *
 */
 Date.prototype.toRelativeTime = (function() {

  var _ = function(options) {
    var opts = processOptions(options);

    var now = opts.now || new Date();
    var delta = now - this;
    var future = (delta <= 0);
    delta = Math.abs(delta);

    // special cases controlled by options
    if (delta <= opts.nowThreshold) {
      return future ? 'Right now' : 'Just now';
    }
    if (opts.smartDays && delta <= 6 * MS_IN_DAY) {
      return toSmartDays(this, now);
    }

    var units = null;
    for (var key in CONVERSIONS) {
      if (delta < CONVERSIONS[key])
        break;
      units = key; // keeps track of the selected key over the iteration
      if (units == 'hour' || units == 'minute'  || units == 'day') {
        units = units.substr(0, 1);
      } else {
        units = ' ' + units;
      }
      delta = delta / CONVERSIONS[key];
    }

    // pluralize a unit when the difference is greater than 1.
    delta = Math.floor(delta);
    if (delta !== 1 && units.length > 1) { units += "s"; }
    return [delta, units, future ? " left" : " ago"].join("");
  };

  var processOptions = function(arg) {
    if (!arg) arg = 0;
    if (typeof arg === 'string') {
      arg = parseInt(arg, 10);
    }
    if (typeof arg === 'number') {
      if (isNaN(arg)) arg = 0;
      return {nowThreshold: arg};
    }
    return arg;
  };

  var toSmartDays = function(date, now) {
    var day;
    var weekday = date.getDay();
    var dayDiff = weekday - now.getDay();
    if (dayDiff === 0)       day = 'Today';
    else if (dayDiff == -1) day = 'Yesterday';
    else if (dayDiff == 1 && date > now)  day = 'Tomorrow';
    else                    day = WEEKDAYS[weekday];
    return day + " at " + date.toLocaleTimeString();
  };

  var CONVERSIONS = {
    millisecond: 1, // ms    -> ms
    second: 1000,   // ms    -> sec
    minute: 60,     // sec   -> min
    hour:   60,     // min   -> hour
    day:    24,     // hour  -> day
    month:  30,     // day   -> month (roughly)
    year:   12      // month -> year
  };
  var MS_IN_DAY = (CONVERSIONS.millisecond * CONVERSIONS.second * CONVERSIONS.minute * CONVERSIONS.hour * CONVERSIONS.day);

  var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return _;

})();