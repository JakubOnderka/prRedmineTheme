"use strict";

define(['lib/local_storage'], function (ls) {
  if (typeof jQuery === 'undefined') {
    throw new Error('Redmine API require jQuery library');
  }

  var $ = jQuery;

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

  // Load Redmine API key from my account page and save to local storage
  this.getRedmineApiKey = function(callback) {
    var redmineApiKey = localStorage.getItem('rma:redmineApiKey');
    if (!redmineApiKey) {
      $.get('/my/account').done(function(html) {
        redmineApiKey = $(html).find('#api-access-key').text();

        if (!redmineApiKey) {
          throw new Error('Cannot find Redmine API access key in element #api-access-key on page /my/account.');
        }

        ls.set('rma:redmineApiKey', redmineApiKey);
        callback(redmineApiKey);
      }).fail(function() {
        throw new Error('Cannot load page /my/account for getting Redmine API access key.');
      });
      return;
    }
    callback(redmineApiKey);
  };

  this.get = function(uri, params, callback) {
    this.getRedmineApiKey(function(key) {
      params.key = key;
      uri += '?' + $.param(params);

      $.ajax({
        url: uri,
        dataType: 'text',
        global: false

      }).done(function(data) {
        callback(JSON.parse(data), data);

      }).fail(function(jqXHR, textStatus) {
        if (jqXHR.statusCode() === 401) {
          throw new Error('Redmine API access key is invalid.');
        } else {
          throw new Error('Cannot load URL ' + uri + ' from Redmine API. ' + textStatus);
        }
      });
    });
  };

  this.getWithCache = function(uri, params, callback) {
    var cacheKey = 'rma:cache:' + hashCode(uri +  '?' + $.param(params)),
      cached = ls.get(cacheKey);

    if (cached) {
      callback(JSON.parse(cached));
    }

    this.get(uri, params, function(json, data) {
      if (cached != data) {
        ls.set(cacheKey, data, 1);
        callback(json);
      }
    });
  };

  this.getIssuesWithCache = function(params, callback) {
    this.getWithCache('/issues.json', params, callback);
  };

  this.getProject = function(projectId, callback) {
    this.getWithCache('/projects/' + projectId + '.json', {}, callback);
  }
});