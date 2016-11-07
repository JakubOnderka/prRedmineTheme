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

  return {
    isTextDate: function(text) {
      return text.split('-').length === 3;
    },

    formatFullDate: function(date) {
      if (!isMoment(date)) {
        throw new Error('Date must be instance of moment.');
      }

      var month = monthsInSecondCase[date.month()];
      return date.format('D. [' + month + '] YYYY');
    },

    formatFullDateWithRelative: function(date) {
      var fullDate = this.formatFullDate(date);
      return fullDate + ' (' + date.fromNow() + ')';
    }
  }
});