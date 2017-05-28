'use strict';

(function() {

  var RequestService = function($rootScope, $http) {

    // Verifica se existe conexão com a Internet
    var isOnline = function() {
      var onLine = window.navigator.onLine;
      return onLine;
    };

    // GET
    this.get = function(url) {
      if (isOnline()) {
        return $http.get(url);
      }
    };

    // POST Simples
    this.post = function(url, params) {
      if (isOnline()) {
        return $http.post(url + params);
      }
    };

    // PATCH
    this.patch = function(url, params) {
      if (isOnline()) {
        return $http.patch(url + params);
      }
    };

    // POST
    this.postFull = function(url, body, auth) {
      if (isOnline()) {
        return $http({
          url: url,
          dataType: 'json',
          method: 'POST',
          data: body,
          headers: {
            "Content-Type": "application/json",
            "Authorization": auth
          }
        });
      }
    };
  };

  RequestService.$inject = ['$rootScope', '$http'];

  angular
    .module('beeApp')
    .service('RequestService', RequestService);

})();
