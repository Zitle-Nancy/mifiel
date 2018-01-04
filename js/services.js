(function() {
    angular.module('testService', [])
        .factory('testRequest', function ($http) {
            var pathVolabit = "https://www.volabit.com/api/v1/tickers";
            var pathBitso = "https://api.bitso.com/v3/ticker?book=btc_mxn";
            var pathBitstamp = "https://www.bitstamp.net/api/ticker";
            // var pathBitso = "https://api.bitso.com/v3/available_books/";

            return {
                getDataVolabit: function () {
                    var returnDataVolabit = $http.get(pathVolabit);
                    return returnDataVolabit;
                },
                getDataBitso: function () {
                    var returnDataBitso = $http.get(pathBitso);
                    return returnDataBitso;
                },
                getDataBitstamp: function () {
                    var returnDataBitstamp = $http.get(pathBitstamp);
                    return returnDataBitstamp;
                }
            }
        })
})();