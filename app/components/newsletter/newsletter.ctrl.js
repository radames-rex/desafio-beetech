'use strict';

(function() {

  var NewsletterCtrl = function($scope, $log, NewsletterService, $timeout) {

    var ctrl = this;

    ctrl.register = function() {
      NewsletterService.registerNewsletter(ctrl.email).then(function(data) {
        var newsletter = $('.newsletter'),
          msg = $('.msg');
        newsletter.css('filter', 'blur(4px)');
        msg.css('display', 'flex');
        $timeout(function() {
          msg.css('display', 'none');
          newsletter.css('filter', 'blur(0px)');
        }, 1500);
      }, function(response) {
        $log.warn(response);
      });
    };

  };

  NewsletterCtrl.$inject = ['$scope', '$log', 'NewsletterService', '$timeout'];

  angular
    .module('beeApp')
    .controller('NewsletterCtrl', NewsletterCtrl);
})();
