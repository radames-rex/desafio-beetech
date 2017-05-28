'use strict';

(function() {

  /**
   * Controller principal.
   * @function MainCtrl
   * @author Rádames Rex
   * @param $scope Escopo do controller
   * @param $log Log
   */
  var MainCtrl = function($scope, $log) {
    console.log("Plus Ultra!");
  };

  MainCtrl.$inject = ['$scope', '$log'];

  angular
    .module('beeApp')
    .controller('MainCtrl', MainCtrl);
})();
