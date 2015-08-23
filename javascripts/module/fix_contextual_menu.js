define({
  init: function () {
    var menu = document.getElementById('context-menu');
    if (menu) {
      menu.parentNode.removeChild(menu);
      document.body.appendChild(menu);
    }
  }
});