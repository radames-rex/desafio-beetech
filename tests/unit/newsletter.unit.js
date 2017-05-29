'use strict';

describe('NewsletterCtrl ->', function() {
  var controller = null,
    scope = null,
    NewsletterService,
    RequestService,
    REQUEST,
    $httpBackend;

  beforeEach(module('beeApp'));

  beforeEach(function() {
    angular.mock.inject(function($controller, $rootScope, $injector, _NewsletterService_, _RequestService_, _REQUEST_) {
      //Configura o mock das respostas de Http Service
      REQUEST = _REQUEST_;
      NewsletterService = _NewsletterService_;
      RequestService = _RequestService_;
      $httpBackend = $injector.get('$httpBackend');

      // Pré configuração do scopo de dados
      scope = $rootScope.$new();
      scope.ctrl = {
        form: {},
      }

      controller = $controller('NewsletterCtrl', {
        '$scope': scope
      });

      $httpBackend.when('GET', 'translate/messages-pt-BR.json')
        .respond(200, {});
      $httpBackend.when('GET', 'translate/messages-en-US.json')
        .respond(200, {});
      $httpBackend.when('GET', 'components/main/main.html')
        .respond(200, {});
      $httpBackend.when('GET', 'components/dashboard/dashboard.html')
        .respond(200, {});
      $httpBackend.when('POST', 'http://demo3643409.mockable.io/newsletter')
        .respond(200, {})
    });
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('deve estar definido', function() {
    expect(scope).toBeDefined();
    $httpBackend.flush();
  });

  it('deve registrar usuário no newsletter', function() {
    controller.name = 'teste';
    controller.email = 'teste@teste.com';
    controller.register();
    expect(controller.register).toBeDefined();
    $httpBackend.flush();
  });
});
