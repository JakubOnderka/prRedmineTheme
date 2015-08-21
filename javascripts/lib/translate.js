define(['translation/cs', 'translation/en'], function(cs, en) {
  var language = document.documentElement.lang;

  return function(key) {
    if (language === 'cs' && key in cs) {
      return cs[key];
    } else if (language === 'en' && key in en) {
      return en[key];
    } else {
      return key;
    }
  }
});