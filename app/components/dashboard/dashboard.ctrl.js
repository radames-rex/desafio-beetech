'use strict';

(function() {

  var DashboardCtrl = function(DashboardService, $scope, $log, $interval) {
    var ctrl = this;

    ctrl.quotations = "";

    var init = function(ctrl) {
      DashboardService.getQuotations().then(function(data) {
        ctrl.quotations = data;
      });
    }

    ctrl.calculo = function(factor, div, value) {
      return DashboardService.calculo(factor, div, value);
    }

    $interval(function() {
      init(ctrl);
    }, 10000);

    init(ctrl);
  };

  DashboardCtrl.$inject = ['DashboardService', '$scope', '$log', '$interval'];

  angular
    .module('beeApp')
    .controller('DashboardCtrl', DashboardCtrl);
})();
