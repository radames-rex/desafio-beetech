'use strict';

(function() {

  var DashboardService = function($q, $log, RequestService, REQUEST) {
    this.getQuotations = function() {
      var defer = $q.defer();
      RequestService.get(REQUEST.api.quotations).then(function(data) {
        var data = data.data
        if (typeof data === 'object') {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    this.calculo = function(factor, div, value) {
      var result = factor / div * value;
      return parseFloat(result.toFixed(2));
    };
  };

  DashboardService.$inject = ['$q', '$log', 'RequestService', 'REQUEST'];

  angular
    .module('beeApp')
    .service('DashboardService', DashboardService);
})();
