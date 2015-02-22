define(['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('trim', function(key) {
    return key.trim();
  });
});