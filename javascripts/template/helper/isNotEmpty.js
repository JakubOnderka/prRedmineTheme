define(['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('isNotEmpty', function(first,  options) {
    if (first && first.length !== 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
});