define(['vendor/handlebars.runtime', 'lib/translate'], function (handlebars, _) {
  handlebars.registerHelper('monthFromDate', function(key) {
    var id = key.split('-')[1];
    return _('months')[id];
  });
});