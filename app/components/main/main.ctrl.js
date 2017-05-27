'use strict';

(function() {

  var MainCtrl = function($scope, $log) {
    console.log("Plus Ultra!");
  };

  MainCtrl.$inject = ['$scope', '$log'];

  angular
    .module('beeApp')
    .controller('MainCtrl', MainCtrl);
})();
