'use strict';

(function() {

  var NewsletterService = function($q, $log, RequestService, REQUEST) {

    this.registerNewsletter = function(email) {
      var defer = $q.defer(),
        body = {
          'email': email
        };
      RequestService.postFull(REQUEST.api.newsletter, body, REQUEST.auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

  };

  NewsletterService.$inject = ['$q', '$log', 'RequestService', 'REQUEST'];

  angular
    .module('beeApp')
    .service('NewsletterService', NewsletterService);
})();
