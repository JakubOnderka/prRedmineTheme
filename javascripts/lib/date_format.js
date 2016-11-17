define(['vendor/moment'], function (moment) {

  var monthsInSecondCase = [
    'ledna',
    'února',
    'března',
    'dubna',
    'května',
    'června',
    'července',
    'srpna',
    'září',
    'října',
    'listopadu',
    'prosince'
  ];

  function isMoment(date) {
    return moment.isMoment(date);
  }

  function getWeekType(date, compareTo) {
    if (!isMoment(date)) {
      throw new Error('`date` must be instance of moment.');
    }

    if (!compareTo) {
      compareTo = moment();
    } else if (!isMoment(compareTo)) {
      throw new Error('`compareTo` must be instance of moment.');
    }

    var currentWeek = compareTo.week(),
      currentYear = compareTo.year(),
      week = date.week(),
      year = date.year();

    if (week === currentWeek && year === currentYear) {
      return 'sameWeek';

    } else if (
      week === (currentWeek - 1) && year === currentYear ||
      week === 52 && year === (currentYear - 1)
    ) {
      return 'prevWeek';

    } else if (
      week === (currentWeek + 1) && year === currentYear ||
      week === 1 && year === (currentYear + 1)
    ) {
      return 'nextWeek;'
    }

    return 'sameElse';
  }

  function dateDiffType(date, compareTo) {
    if (!isMoment(date)) {
      throw new Error('`date` must be instance of moment.');
    }

    if (!compareTo) {
      compareTo = moment();
    } else if (!isMoment(compareTo)) {
      throw new Error('`compareTo` must be instance of moment.');
    }

    var diff = date.clone().startOf('day').diff(compareTo.clone().startOf('day'), 'days');

    if (diff == 0) {
      return 'sameDay';

    } else if (diff == -1) {
      return 'prevDay';

    } else if (diff == 1) {
      return 'nextDay';

    } else {
      return getWeekType(date, compareTo);
    }
  }

  function monthInSecondCase(month) {
    return monthsInSecondCase[month];
  }

  return {
    isTextDate: function(text) {
      return text.split('-').length === 3;
    },

    formatFullDate: function(date) {
      if (!isMoment(date)) {
        throw new Error('Date must be instance of moment.');
      }

      return date.format('D. [' + monthInSecondCase(date.month()) + '] YYYY');
    },

    formatFullDateWithRelative: function(date) {
      if (!isMoment(date)) {
        throw new Error('Date must be instance of moment.');
      }

      return this.formatFullDate(date) + ' (' + this.betterFromNow(date) + ')';
    },

    betterFromNow: function(date) {
      switch(dateDiffType(date)) {
        case 'sameDay':
          return 'dnes ' + date.fromNow();

        case 'prevDay':
          return 'včera';

        case 'nextDay':
          return 'zítra';

        default:
          return date.fromNow();
      }
    }
  }
});