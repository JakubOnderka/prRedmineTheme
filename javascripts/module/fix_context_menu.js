define(function () {
  if (contextMenuCreate) {
    if (console) console.log("Replaced function 'contextMenuCreate'.");

    contextMenuCreate = function () {
      if (!document.getElementById('context-menu')) {
        var menu = document.createElement('div');
        menu.id = 'context-menu';
        menu.style = 'display:none';
        document.body.appendChild(menu);
      }
    }
  }

  return {
    init: function () {
      var menu = document.getElementById('context-menu');
      if (menu && menu.parentNode !== document.body) {
        menu.parentNode.removeChild(menu);
        document.body.appendChild(menu);

        if (console) console.log("Changed position of '#context-menu'.")
      }
    }
  }
});