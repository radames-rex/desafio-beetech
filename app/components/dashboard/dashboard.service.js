'use strict';

(function() {

  /**
   * Service para o Dashboard.
   * @function DashboardService
   * @author Rádames Rex
   * @param $q Para tratamento de promises
   * @param $log Log
   * @param RequestService Service para requisições
   * @param REQUEST Constante com dados para requisições à api
   */
  var DashboardService = function($q, $log, RequestService, REQUEST) {

    /**
     * Retorna uma promessa com os dados da requisição GET das cotações na api.
     * @function getQuotations
     * @author Rádames Rex
     */
    this.getQuotations = function() {
      var defer = $q.defer();
      RequestService.get(REQUEST.api.quotations).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

    /**
     * Calcula os valores convertidos para cada moeda com 2 casas decimais.
     * @function calculo
     * @author Rádames Rex
     * @param factor Moeda 1 valor base
     * @param div Moeda 2 valor base
     * @param value Valor a ser convertido
     */
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
