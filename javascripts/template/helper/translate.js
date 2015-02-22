define(['vendor/handlebars.runtime', 'lib/translate'], function (handlebars, _) {
  handlebars.registerHelper('_', function(key) {
    return _(key);
  });
});