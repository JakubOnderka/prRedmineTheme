"use strict";

define(function() {
  var ls = window.localStorage,
    NS = 'theme';

  return {
    _key: function (key, sub) {
      if (key.indexOf('.') !== -1) {
        throw new Error('Key cannot contains dot character, "' + key + '" given.');
      }

      if (sub !== undefined) {
        return NS + '.' + key + '.' + sub;
      } else {
        return NS + '.' + key;
      }
    },

    _isExpired: function (key) {
      var expirationTime;

      if ((expirationTime = ls.getItem(this._key(key, 'expire'))) !== null) {
        if (new Date() > new Date(expirationTime)) {
          return true;
        }
      }

      return false;
    },

    set: function (key, value, expireInHours) {
      if (expireInHours !== undefined) {
        var expirationTime = new Date().getTime() + expireInHours * 3600 * 1000;
        ls.setItem(this._key(key, 'expire'), new Date(expirationTime));
      }

      return ls.setItem(this._key(key), value);
    },

    get: function (key) {
      if (this._isExpired(key)) {
        ls.removeItem(this._key(key, 'expire'));
        ls.removeItem(this._key(key));
        return null;
      }

      return ls.getItem(this._key(key));
    },

    remove: function (key) {
      ls.removeItem(this._key(key, 'expire'));
      return ls.removeItem(this._key(key));
    },

    removeExpired: function() {
      for (var lsItem in localStorage) {
        var parts = lsItem.split('.');
        if (parts.length === 2 && parts[0] === NS) {
          var key = parts[1];
          if (this._isExpired(key)) {
            this.remove(key);
          }
        }
      }
    }
  }
});