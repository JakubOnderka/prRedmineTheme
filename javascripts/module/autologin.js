"use strict";

/**
 * Auto login when password is filled in login form when page is loaded
 */
define(['lib/page_property_miner', 'lib/local_storage'], function (ppp, ls) {
  return {
    init: function() {
      if (!ppp.matchPage('account', 'login')) {
        return;
      }

      // Login credentials are invalid, do not log again
      if (document.getElementById('flash_error')) {
        return;
      }

      function login() {
        if (
          document.getElementById('username') &&
          document.getElementById('username').value === 'jakub' && // TODO: Currently only for me
          document.getElementById('password').value
        ) {
          document.querySelector('#login-form form').submit();
        }
      }

      if (ls.get('autoLogin')) {
        login();
        setTimeout(function () {
          login();
        }, 100);
      }

      $('#account .logout').click(function () {
        ls.remove('autoLogin');
      });
    }
  }
});