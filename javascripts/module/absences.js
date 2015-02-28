"use strict";

define([
  'lib/page_property_miner',
  'lib/local_storage',
  'templates',
  'vendor/moment'
], function (ppp, ls, templates, moment) {
  return {
    absencesInfoUrl: null,
    htmlOutput: null,

    czechMonths: {
      Leden: 1,
      Únor: 2,
      Březen: 3,
      Duben: 4,
      Květen: 5,
      Červen: 6,
      Červenec: 7,
      Srpen: 8,
      Září: 9,
      Říjen: 10,
      Listopad: 11,
      Prosinec: 12
    },

    init: function () {
      var self = this;
      this.absencesInfoUrl = window.location.hostname == 'localhost' ?
        'holidays.html' : // test
        '/projects/pm/wiki/Holidays'; // production

      if (ppp.matchPage('welcome', 'index')) {
        $('div.projects.box').after('<div id="plannedAbsences"></div>');

      } else if (ppp.matchPage('issues', 'index')) {
        $('#sidebar').append('<div id="plannedAbsences"></div>');

      } else if (ppp.matchPage('issues', 'show')) {
        this.loadWithCache(function(absences) {
          self.markAbsencedUsers(absences);
        });
      }

      if ($('#plannedAbsences').length) {
        this.loadWithCache(function(absences) {
          var html = self.createHtml(absences);
          self.putHtmlIntoDocument(html);
        });
      }
    },

    fixDate: function (date) {
      var parts = date.split('-');
      if (parts[1].length !== 2 && parseInt(parts[1]) < 10) {
        parts[1] = '0' + parts[1];
      }
      if (parts[2].length !== 2 && parseInt(parts[2]) < 10) {
        parts[2] = '0' + parts[2];
      }

      return parts.join('-')
    },

    removeOldAndMarkActual: function (data) {
      var filtered = {};
      var now = new Date();
      var startOfDay = this.fixDate(now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate());

      for (var name in data) {
        for (var i = 0; i < data[name].length; i++) {
          var entry = data[name][i],
            from = this.fixDate(entry.from),
            to = this.fixDate(entry.to);

          // Entry is old
          if (to < startOfDay) {
            continue;
          }

          entry.actual = (from <= startOfDay);

          if (!(name in filtered)) {
            filtered[name] = [];
          }

          filtered[name].push(entry);
        }
      }

      return filtered;
    },

    markAbsencedUsers: function(data) {
      var self = this;
      data = this.removeOldAndMarkActual(data);

      function findCurrentAbsence(name) {
        if (name in data) {
          for (var i = 0; i < data[name].length; i++) {
            var absence = data[name][i];
            if (absence.actual) {
              return absence;
            }
          }
        }

        return false;
      }

      $('#issue_assigned_to_id option').each(function() {
        var $option = $(this),
          name = $option.text(),
          absence = findCurrentAbsence(name);

        if (absence) {
          $option.text($option.text() + ' ⚠');
        }
      });

      $('.user').each(function() {
        var $user = $(this),
          name = $user.text(),
          absence = findCurrentAbsence(name);

        if (absence) {
          var title = moment(self.fixDate(absence.from)).format('D. MMMM');
          title += '–' + moment(self.fixDate(absence.to)).format('D. MMMM');
          if (absence.type && absence.type !== '-') {
            title += ': ' + absence.type;
          }

          $user.after(templates['not_available_user']({
            title: title
          }));
        }
      });

    },

    createHtml: function (data) {
      data = this.removeOldAndMarkActual(data);

      // Group by month
      var grouped = {};
      for (var name in data) {
        for (var i = 0; i < data[name].length; i++) {
          var parts = data[name][i].from.split('-'),
            month = parts[0] + '-' + parts[1];

          if (!(month in grouped)) {
            grouped[month] = {};
          }
          if (!(name in grouped[month])) {
            grouped[month][name] = [];
          }

          grouped[month][name].push(data[name][i]);
        }
      }

      var months = [];
      for (month in grouped) {
        var object = {
          month: month,
          persons: []
        };

        for (var person in grouped[month]) {
          object.persons.push({
            name: person,
            absences: grouped[month][person]
          });
        }

        object.persons.sort(function (a, b) {
          return a.name.split(' ')[1].localeCompare(b.name.split(' ')[1]);
        });

        months.push(object);
      }

      months.sort(function (a, b) {
         if (a.month > b.month) {
           return 1;
         } else if (a.month < b.month) {
           return -1;
         } else {
           return 0;
         }
      });

      return months;
    },

    putHtmlIntoDocument: function (months) {
      $('#plannedAbsences').html(templates['absences']({
        detailsUri: this.absencesInfoUrl,
        months: months
      }));

      var self = this;
      $('#plannedAbsences .refresh').click(function() {
        self.load(function(absences) {
          var html = self.createHtml(absences);
          self.putHtmlIntoDocument(html);
        });
        return false;
      });
    },

    getAbsencesForTable: function (table, data) {
      var trs = table.querySelectorAll('tr'),
        month = trs[0].querySelector('td strong').textContent,
        date = month.split(' ')[1] + '-' + this.czechMonths[month.split(' ')[0]] + '-';

      for (var i = 2; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td'),
          name = tds[0].textContent,
          person;

        if (name in data) {
          person = data[name];
        } else {
          data[name] = [];
          person = data[name];
        }

        var day = 1;
        for (var j = 1; j < tds.length; j++) {
          var td = tds[j],
            tdContent = td.textContent,
            absence;

          if (tdContent !== (day + '.')) {
            if (absence && absence.type !== tdContent) {
              absence.to = this.fixDate(date + (day - 1));
              person.push(absence);
              absence = null;
            }

            if (!absence) {
              absence = {
                from: this.fixDate(date + day),
                to: -1,
                type: tdContent
              };
            }
          } else if (absence) {
            absence.to = this.fixDate(date + (day - 1));
            person.push(absence);
            absence = null;
          }

          if (td.colSpan) {
            day += td.colSpan;
          } else {
            day++;
          }
        }

        if (absence) {
          absence.to = this.fixDate(date + (day - 1));
          person.push(absence);
          absence = null;
        }
      }
    },

    loadAbsencesData: function (callback) {
      var self = this;

      $.ajax({
        url: this.absencesInfoUrl,
        global: false,
        cache: false
      }).success(function (data) {
        var absences = {};

        var tmp = document.createElement('div');
        tmp.innerHTML = data;

        var tables = tmp.querySelectorAll('table');
        for (var i = 0; i < tables.length; i++) {
          self.getAbsencesForTable(tables[i], absences);
        }

        callback(absences);
      });
    },

    loadWithCache: function (callback) {
      if (ls.get('absencesObject')) {
        var absences = JSON.parse(ls.get('absencesObject'));
        callback(absences);
      } else {
        this.load(callback);
      }
    },

    load: function (callback) {
      this.loadAbsencesData(function (absences) {
        ls.set('absencesObject', JSON.stringify(absences), 24);
        callback(absences);
      });
    }
  }
});