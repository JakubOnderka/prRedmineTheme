define(['vendor/handlebars.runtime', 'lib/translate'], function (handlebars, _) {
  handlebars.registerHelper('_', function(key) {
    var translated = _(key);

    for (var i = 1; i < (arguments.length - 1); i++) {
      translated = translated.replace('%' + (i - 1), arguments[i]);
    }

    return translated;
  });
});