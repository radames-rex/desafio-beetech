'use strict';

(function() {

  var DashboardCtrl = function(DashboardService, $scope, $log, $interval) {
    var ctrl = this;

    ctrl.quotations = "";

    var init = function(ctrl) {
      DashboardService.getQuotations().then(function(data) {
        ctrl.quotations = data;
        var load = $('#loading'),
          content = $('#quotations');
        load.addClass('is-inactive');
        content.removeClass('is-inactive');
      });
    }

    ctrl.calculo = function(factor, div, value) {
      return DashboardService.calculo(factor, div, value);
    }

    ctrl.focusIn = function() {
      ctrl.a = null;
      ctrl.b = null;
      init(ctrl);
    };

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
