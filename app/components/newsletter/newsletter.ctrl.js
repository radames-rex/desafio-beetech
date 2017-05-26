'use strict';

(function() {

  var NewsletterCtrl = function($scope, $log) {

    this.user = function() {
      $log.log(this.email);
      $log.log(this.password);
    };

  };

  NewsletterCtrl.$inject = ['$scope', '$log'];

  angular
    .module('beeApp')
    .controller('NewsletterCtrl', NewsletterCtrl);
})();
