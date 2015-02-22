define(['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('is', function(first, second,  options) {
    if (first === second) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
});