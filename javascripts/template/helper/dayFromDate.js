define(['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('dayFromDate', function(key) {
    return key.split('-')[2];
  });
});