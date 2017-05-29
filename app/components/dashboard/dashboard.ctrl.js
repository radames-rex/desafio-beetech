'use strict';

(function() {

  /**
   * Controller do dashboard.
   * @function DashboardCtrl
   * @author Rádames Rex
   * @param DashboardService Service para separar regras do controller
   * @param $scope Escopo do controller
   * @param $log Log
   * @param $interval Realiza operações com delay contínuo
   */
  var DashboardCtrl = function(DashboardService, $scope, $log, $interval) {

    // Facilita o uso do this referente ao controller
    var ctrl = this;

    ctrl.quotations = "";

    /**
     * Inicializa o dashboard retornando todas as cotações disponíveis na api.
     * @function init
     * @author Rádames Rex
     * @param ctrl DashboardCtrl
     */
    var init = function(ctrl) {
      DashboardService.getQuotations().then(function(data) {
        ctrl.quotations = data;
        // Remove o loading e exibe os dados
        var load = $('#loading'),
          content = $('#quotations');
        load.addClass('is-inactive');
        content.removeClass('is-inactive');
        console.log('ok');
      });
    }

    /**
     * Disponibiliza para view a função de conversão das moedas.
     * @function calculo
     * @author Rádames Rex
     * @param factor Moeda 1 valor base
     * @param div Moeda 2 valor base
     * @param value Valor a ser convertido
     */
    ctrl.calculo = function(factor, div, value) {
      return DashboardService.calculo(factor, div, value);
    }

    /**
     * Facilita experiência do usuário, removendo o focus e resetando os outros campos quando um está focado.
     * @function focusIn
     * @author Rádames Rex
     */
    ctrl.focusIn = function() {
      ctrl.a = null;
      ctrl.b = null;
      init(ctrl);
    };

    // Inicializa a aplicação
    init(ctrl);

    // De 10 em 10 segundos atualiza os dados
    $interval(function() {
      init(ctrl);
    }, 10000);

  };

  DashboardCtrl.$inject = ['DashboardService', '$scope', '$log', '$interval'];

  angular
    .module('beeApp')
    .controller('DashboardCtrl', DashboardCtrl);
})();
