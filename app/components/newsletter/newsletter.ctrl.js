'use strict';

(function() {

  /**
   * Controller da diretiva newsletter.
   * @function NewsletterCtrl
   * @author Rádames Rex
   * @param $scope Escopo do controller
   * @param $log Log
   * @param NewsletterService Service para separar regras do controller
   * @param $timeout Realiza operações com delay
   */
  var NewsletterCtrl = function($scope, $log, NewsletterService, $timeout) {

    // Facilita o uso do this referente ao controller
    var ctrl = this;

    /**
     * Função disponível para view que permite o registro do usuário em um newsletter.
     * @function register
     * @author Rádames Rex
     */
    ctrl.register = function() {
      NewsletterService.registerNewsletter(ctrl.name, ctrl.email).then(function(data) {
        // Cria uma mensagem de sucesso com blur no fundo
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
