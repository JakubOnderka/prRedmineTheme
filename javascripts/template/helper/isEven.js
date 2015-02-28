define(['vendor/handlebars.runtime'], function (handlebars) {
  handlebars.registerHelper('isEven', function(first,  options) {
    if (first % 2 === 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });
});