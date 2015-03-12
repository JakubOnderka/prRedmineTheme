define(['vendor/handlebars.runtime', 'lib/translate'], function (handlebars, _) {
  handlebars.registerHelper('_', function(key, options) {
    var translated = _(key);

    var i = 0;
    for (var a in options.data.root) {
      var value = options.data.root[a];
      translated = translated.replace('%' + (i++), value);
      translated = translated.replace('%' + a, value);
    }

    return translated;
  });
});