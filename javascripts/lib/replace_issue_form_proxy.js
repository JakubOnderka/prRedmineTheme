define(function() {
  var proxied = replaceIssueFormWith,
    callbacks = [];

  replaceIssueFormWith = function () {
    console.log('replaceIssueFormWith proxy called');
    var output = proxied.apply(this, arguments);
    for (var i = 0; i < callbacks.length; i++) {
      callbacks[i]();
    }
    return output;
  };

  return function (callback) {
    callbacks.push(callback);
  }
});