define(['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('dayFromDate', function(key) {
    return parseInt(key.split('-')[2]);
  });
});