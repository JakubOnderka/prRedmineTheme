"use strict";

/**
 * Auto login when password is filled in login form when page is loaded
 */
define(['lib/page_property_miner'], function (ppp) {
  return {
    init: function() {
      if (!ppp.matchPage('account', 'login')) {
        return;
      }

      // Login credentials are invalid, do not log again
      if (document.getElementById('flash_error')) {
        return;
      }

      if (
        document.getElementById('username').value === 'jakub' && // TODO: Currently only for me
        document.getElementById('password').value
      ) {
        document.querySelector('#login-form form').submit();
      }
    }
  }
});