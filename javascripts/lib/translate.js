define(['translation/cs'], function(cs) {
  var language = $('html').attr('lang');

  return function(key) {
    if (language === 'cs' && key in cs) {
      return cs[key];
    } else {
      return key;
    }
  }
});