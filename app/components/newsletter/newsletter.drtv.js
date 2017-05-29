'use strict';

(function() {

  /**
   * Diretiva customizada newsletter.
   * @function newsletter
   * @author Rádames Rex
   * @param $log Log
   */
  var newsletter = function($log) {
    return {
      restrict: 'E',
      templateUrl: 'components/newsletter/newsletter.html',
      controller: 'NewsletterCtrl as ctrl'
    };
  };

  newsletter.$inject = ['$log'];

  angular
    .module('beeApp')
    .directive('newsletter', newsletter);
})();
