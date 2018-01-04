(function() {
	var app = angular.module('btc', ['testService','ngRoute']);

	app.controller('getData',['$scope','testRequest', function($scope,testRequest) {
		$scope.getPriceVolabit = function() {
			testRequest.get().then(function(response) {
				console.log(response);
				$scope.priceUsdvolabit = response.data.btc_usd_buy;
			})
			
		}
		$scope.getPriceVolabit();

		$scope.getPriceBitso = function() {
			testRequest.get().then(function(response) {
				console.log(response, 'hola');
			})
		}
		$scope.getPriceBitso();
	}]);

})();

