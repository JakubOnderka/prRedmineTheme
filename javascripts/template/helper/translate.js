define(['vendor/handlebars.runtime', 'lib/translate'], function (handlebars, _) {
  handlebars.registerHelper('_', function(key) {
    var translated = _(key);

    var i = 0;
    for (var a in this) {
      translated = translated.replace('%' + (i++), this[a]);
      translated = translated.replace('%' + a, this[a]);
    }

    return translated;
  });
});