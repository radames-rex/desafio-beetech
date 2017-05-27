'use strict';

(function() {

  var DashboardCtrl = function($scope, $log) {
    this.quotations = {
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
    };
  };

  DashboardCtrl.$inject = ['$scope', '$log'];

  angular
    .module('beeApp')
    .controller('DashboardCtrl', DashboardCtrl);
})();
