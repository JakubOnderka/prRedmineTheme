"use strict";

define(function() {
  var ls = window.localStorage,
    NS = 'theme';

  function hashCode(string) {
    var hash = 0;
    if (string == 0) return hash;
    for (var i = 0; i < string.length; i++) {
      var char = string.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  function generateKey(key, sub) {
    if (key.indexOf('.') !== -1) {
      throw new Error('Key cannot contains dot character, "' + key + '" given.');
    }

    if (sub !== undefined) {
      return NS + '.' + key + '.' + sub;
    } else {
      return NS + '.' + key;
    }
  }

  function isExpired(key) {
    var expirationTime;

    if ((expirationTime = ls.getItem(generateKey(key, 'expire'))) !== null) {
      if (new Date() > new Date(expirationTime)) {
        return true;
      }
    }

    return false;
  }

  return {
    set: function (key, value, expireInHours) {
      if (expireInHours !== undefined) {
        var expirationTime = new Date().getTime() + expireInHours * 3600 * 1000;
        ls.setItem(generateKey(key, 'expire'), expirationTime);
      }

      return ls.setItem(generateKey(key), value);
    },

    setJsonCache: function (type, uri, data, expireInHours) {
      return this.set(type + ':' + hashCode(uri), JSON.stringify(data), expireInHours);
    },

    get: function (key) {
      if (isExpired(key)) {
        this.remove(key);
        return null;
      }

      return ls.getItem(generateKey(key));
    },

    getJsonCache: function (type, uri) {
      var data = this.get(type + ':' + hashCode(uri));
      if (data) {
        return JSON.parse(data);
      }
      return null;
    },

    remove: function (key) {
      ls.removeItem(generateKey(key, 'expire'));
      return ls.removeItem(generateKey(key));
    },

    removeExpired: function() {
      for (var lsItem in localStorage) {
        var parts = lsItem.split('.');
        if (parts.length === 2 && parts[0] === NS) {
          var key = parts[1];
          if (isExpired(key)) {
            this.remove(key);
          }
        }
      }
    }
  }
});