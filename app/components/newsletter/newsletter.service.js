'use strict';

(function() {

  /**
   * Service para o newsletter.
   * @function NewsletterService
   * @author Rádames Rex
   * @param $q Para tratamento de promises
   * @param $log Log
   * @param RequestService Service para requisições
   * @param REQUEST Constante com dados para requisições à api
   */
  var NewsletterService = function($q, $log, RequestService, REQUEST) {

    /**
     * Retorna uma promessa com os dados da requisição POST para inscrever o usuário na api.
     * @function registerNewsletter
     * @author Rádames Rex
     * @param name Nome do usuário
     * @param email Email do usuário
     */
    this.registerNewsletter = function(name, email) {
      var defer = $q.defer(),
        body = {
          'name': name,
          'email': email
        };
      RequestService.postFull(REQUEST.api.newsletter, body, REQUEST.auth).then(function(data) {
        var data = data.data
        defer.resolve(data);
      }, function(response) {
        $log.warn(response.status + " " + response.statusText);
        defer.reject(response);
      });
      return defer.promise;
    };

  };

  NewsletterService.$inject = ['$q', '$log', 'RequestService', 'REQUEST'];

  angular
    .module('beeApp')
    .service('NewsletterService', NewsletterService);
})();
