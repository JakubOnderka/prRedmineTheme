define(['vendor/handlebars.runtime', 'vendor/moment'], function (handlebars, moment) {
  handlebars.registerHelper('redmineTime', function(key) {
    return moment(key).format('YYYY-MM-DD HH.mm');
  });
});