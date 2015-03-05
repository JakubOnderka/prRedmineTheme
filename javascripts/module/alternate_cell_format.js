"use strict";

define(['lib/page_property_miner', 'lib/local_storage', 'vendor/moment'], function (ppp, ls, moment) {

  function lsKey(cellSelector) {
    return 'alternateCellFormat:' + cellSelector.split(' ').join('').split('.').join('_');
  }

  return {
    init: function () {
      this.tools = ProofReasonRedmineTheme.tools;
      this.convertOldFormat();

      // Add class to issue tree table
      $('#issue_tree').find('table.issues tr').each(function () {
        $(this).find('td:eq(2)').addClass('status');
      });

      this.setFormatUp('table.issues .due_date', {'verbalDate': this.format.verbalDate});
      this.setFormatUp('table.issues .updated_on', {'relativeTime': this.format.relativeTime});
      this.setFormatUp('table.issues td.status', {
        'newHighlighted': this.format.newIssuesHighlighted,
        'statusIcon': this.format.statusIcon
      });
      this.setFormatUp('table.issues .tracker', {'shortIssueType': this.format.shortIssueType});

      // Short titles
      /*
       TODO: Disabled for now
       $('table.issues th[title="Sort by \"Priority\""] a').html('P');
       $('table.issues th[title="Sort by \"Tracker\""] a').html('Type');
       $('table.issues th[title="Sort by \"Estimated time\""] a').html('Estimate');*/
    },

    setFormatUp: function (cellSelector, alternateFormats) {
      this.prepareCells(cellSelector, alternateFormats);

      if (ls.get(lsKey(cellSelector))) {
        this.showAlternateFormat(cellSelector, ls.get(lsKey(cellSelector)));
      }
    },

    prepareCells: function (cells, alternateFormats) {
      $(cells).each(function () {
        var $this = $(this),
          text = $this.text();

        if ($this.data('currentlyDisplayed')) {
          return;
        }

        $this.data('format.' + 'originalFormat', text);
        $this.attr('title', text);
        $this.data('currentlyDisplayed', 'originalFormat');

        for (var format in alternateFormats) {
          var procedure = alternateFormats[format];
          $this.data('format.' + format, procedure(text));
        }
      });

      var self = this;
      $(cells).click(function () {
        self.toggleFormats(cells);
      });
    },

    showAlternateFormat: function (cells, format) {
      $(cells).each(function () {
        $(this).html($(this).data('format.' + format));
        $(this).data('currentlyDisplayed', format);
      });
    },

    toggleFormats: function (cells) {
      var cell = $(cells).first();

      var data = cell.data();
      var variants = [];
      for (var param in data) {
        if (param.indexOf('format.') === 0) variants.push(param.substring(7));
      }

      var currentFormat = $.inArray(cell.data('currentlyDisplayed'), variants);
      var nextFormat = (currentFormat < variants.length - 1) ? currentFormat + 1 : 0;

      ls.set(lsKey(cells), variants[nextFormat]);
      this.showAlternateFormat(cells, variants[nextFormat]);
    },

    convertOldFormat: function() {
      var types = ['table.issues .due_date', 'table.issues .updated_on', 'table.issues td.status', 'table.issues .tracker'];
      for (var i in types) {
        var key = types[i];
        var value = window.localStorage.getItem('theme.' + key);
        if (value) {
          ls.set(lsKey(key), value);
          window.localStorage.removeItem('theme.' + key);
        }
      }
    },

    format: {
      statusIcon: function (value) {
        // table cell alternate content creators
        var statusReplacements = {
          'Nový / New': ['inbox'],
          'Přiřazený / Assigned': ['arrow-right'],
          'Vyřešený / Solved': ['ok'],
          'Feedback': ['comment'],
          'Čeká se / Waiting': ['refresh'],
          'Odložený / Postponed': ['stop'],
          'Čeká na klienta': ['eye-open'],
          'Uzavřený / Closed': ['home'],
          'Odmítnutý / Rejected': ['ban-circle'],
          'Needs explanation': ['question-sign'],
          'Needs design': ['picture'],
          'Refused': ['ban-circle'],
          'Needs estimation': ['time'],
          'Needs estimation approval': ['question-sign'],
          'Needs implementation': ['arrow-right'],
          'Needs code review': ['th-list'],
          'Needs deployment': ['upload'],
          'Needs review': ['eye-open'],
          'Closed': ['home']
        };

        // green = work; blue = talk; red = new/accept; gray = outside/no action
        var statusReplacementColors = {
          'Nový / New': ['red'],
          'Přiřazený / Assigned': ['green'],
          'Vyřešený / Solved': ['blue'],
          'Feedback': ['blue'],
          'Needs explanation': ['blue'],
          'Needs design': ['green'],
          'Refused': ['red'],
          'Needs estimation': ['blue'],
          'Needs implementation': ['green'],
          'Needs code review': ['blue'],
          'Needs deployment': ['green']
        };

        if (!value in statusReplacements) {
          return;
        }

        var replacementCell = '';

        for (var i = 0; i < statusReplacements[value].length; i++) {
          var icon = statusReplacements[value][i];
          var color = statusReplacementColors[value] ? statusReplacementColors[value][i] : null;
          var colorReplacement = color ? 'style="background-color: ' + color + '"' : '';
          replacementCell += '<span ' + colorReplacement + ' class="glyphicon glyphicon-' + icon + '"></span>';
        }

        return replacementCell;
      },

      newIssuesHighlighted: function (value) {
        if (value == 'Nový / New') {
          return '<b style="color: red">' + value + '</b>';
        } else return value;
      },

      verbalDate: function (value) {
        var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        if (!value) return '';
        else {
          var date = moment(value).toDate();
          var daysCount = daysFromToday(date);
          var textualDueDate = '';

          switch (daysCount) {
            case 0:
              textualDueDate = 'Yesterday';
              break;
            case 1:
              textualDueDate = date.toRelativeTime(new Date(), 5000, true);
              break;
            case 2:
              textualDueDate = 'Tomorrow';
              break;
            case 3:
            case 4:
            case 5:
              textualDueDate = weekday[date.getDay()].substring(0, 3) + ' ' + date.getDate() + '. ' + (date.getMonth() + 1) + '.';
              break;
            default:
              textualDueDate = date.getDate() + '. ' + (date.getMonth() + 1) + '.';
          }

          if (date < new Date()) {
            return '<b style="color: red">' + date.toRelativeTime(new Date(), 5000, true) + '</b>';
          }

          return textualDueDate;
        }
      },

      relativeTime: function (value) {
        if (!value) return '';
        var date = moment(value).toDate();
        return date.toRelativeTime(new Date(), 5000, true);
      },

      shortIssueType: function (value) {
        var icons = {
          request: '<span style="opacity:.4">&fnof;</span>',
          error: '<img src="/themes/prRedmineTheme/stylesheets/img/error.png" width="16" height="16" style="opacity:.4">',
          support: '<span class="glyphicon glyphicon-question-sign" style="opacity:.4"></span>',
          development: '<span class="glyphicon glyphicon-console" style="opacity:.4"></span>'
        };

        var types = {
          'Požadavek': icons['request'],
          'Feature Request': icons['request'],
          'Error': icons['error'],
          'Error (Baufinder)': icons['error'],
          'Podpora': icons['support'],
          'Development': icons['development']
        };

        if (value in types) {
          return types[value];
        } else {
          return value;
        }
      }
    }
  }
});