define(['vendor/handlebars.runtime', 'vendor/moment'], function (handlebars, moment) {
  handlebars.registerHelper('monthFromDate', function(key) {
    var parts = key.split('-'),
      month = parts[1],
      year = parts[0];

    var date = moment().year(parseInt(year, 10)).month(parseInt(month, 10) - 1).format('MMMM');
    return date.charAt(0).toUpperCase() + date.slice(1)
  });
});