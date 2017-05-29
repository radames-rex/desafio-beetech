'use strict';

/**
 * Configuração geral.
 * @function app
 * @author Rádames Rex
 */
angular
  .module('beeApp', [
    'ui.router',
    'pascalprecht.translate'
  ])
  .constant('PATH', {
    bee: '/bee',
    newsletter: '/newsletter',
    dashboard: '/dashboard'
  })
  .constant('REQUEST', {
    api: {
      quotations: 'http://demo3643409.mockable.io/quotations',
      newsletter: 'http://demo3643409.mockable.io/newsletter'
    },
    auth: 'desafiobeetech'
  })
  .config(function($stateProvider, $urlRouterProvider, $translateProvider, PATH) {

    // Configuração do provider de universalização e da linguagem padrão.
    $translateProvider.useStaticFilesLoader({
      prefix: 'translate/messages-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('pt-BR');
    $translateProvider.preferredLanguage(navigator.language);

    // Configuração dos estados e rotas da aplicação
    $stateProvider.state('bee', {
      abstract: true,
      url: PATH.bee,
      templateUrl: 'components/main/main.html'
    }).state('bee.dashboard', {
      url: PATH.dashboard,
      templateUrl: 'components/dashboard/dashboard.html',
      controller: 'DashboardCtrl as ctrl'
    });

    // Redirecionamento para evitar 404
    $urlRouterProvider.otherwise(function() {
      return '/bee/dashboard';
    });

  });
