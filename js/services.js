(function() {
    angular.module('testService', [])
        .factory('testRequest', function ($http) {
            var pathVolabit = "https://www.volabit.com/api/v1/tickers";
            var pathBitso = "https://api.bitso.com/v3/available_books/";
            return {
                get: function () {
                    var promesa = $http.get(pathVolabit);
                    return promesa;
                },
                get: function () {
                    var returnData = $http.get(pathBitso);
                    return returnData;
                }
            }
        })
})();