angular.module('volabit', [])
    .factory('testRequest', function ($http) {
        var ruta = "https://www.volabit.com/api/v1/tickers";
        return {
            get: function () {
                var promesa = $http.get(ruta);
                return promesa;
            }
        }
    });