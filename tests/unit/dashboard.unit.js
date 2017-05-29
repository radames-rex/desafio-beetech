'use strict';

describe('DashboardCtrl ->', function() {
  var controller = null,
    scope = null,
    DashboardService,
    RequestService,
    REQUEST,
    $httpBackend;

  beforeEach(module('beeApp'));

  beforeEach(function() {
    angular.mock.inject(function($controller, $rootScope, $injector, _DashboardService_, _RequestService_, _REQUEST_) {
      //Configura o mock das respostas de Http Service
      REQUEST = _REQUEST_;
      DashboardService = _DashboardService_;
      RequestService = _RequestService_;
      $httpBackend = $injector.get('$httpBackend');

      // Pré configuração do scopo de dados
      scope = $rootScope.$new();
      scope.ctrl = {
        form: {},
      }

      controller = $controller('DashboardCtrl', {
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
      $httpBackend.when('GET', 'http://demo3643409.mockable.io/quotations')
        .respond(200, {
          "result": [{
              "quantity": "1500.00",
              "total_value": "4932.47",
              "currencyObj": {
                "name": "Dólar Americano",
                "abbreviation": "USD",
                "acronym": "US$",
                "website": "http://www.federalreserve.gov",
                "full_flag_image": "https://s3-sa-east-1.amazonaws.com/beecambioimages/currency-flags/USD.png"
              }
            },
            {
              "quantity": "1500.00",
              "total_value": "5372.43",
              "currencyObj": {
                "name": "Euro",
                "abbreviation": "EUR",
                "acronym": "€",
                "website": "http://www.ecb.eu",
                "image_paths": [
                  "https://s3-sa-east-1.amazonaws.com/beecambioimages/currencies/euro/500.png"
                ],
                "full_flag_image": "https://s3-sa-east-1.amazonaws.com/beecambioimages/currency-flags/EUR.png"
              }
            },
            {
              "quantity": "900.00",
              "total_value": "3710.11",
              "currencyObj": {
                "name": "Libra Esterlina",
                "abbreviation": "GBP",
                "acronym": "£",
                "website": "http://www.bankofengland.co.uk",
                "full_flag_image": "https://s3-sa-east-1.amazonaws.com/beecambioimages/currency-flags/GBP.png"
              }
            }
          ]
        });
    })
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('deve estar definido', function() {
    expect(scope).toBeDefined();
    $httpBackend.flush();
  });

  it('deve atualizar quotations', function() {
    expect(controller.quotations).toBe('');
    $httpBackend.flush();
  });

  it('deve calcular novas cotações solicitadas pelo usuário', function() {
    expect(controller.quotations).toBe('');
    $httpBackend.flush();
  });
});
