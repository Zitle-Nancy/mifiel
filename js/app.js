(function() {
	var app = angular.module('btc', ['volabit','ngRoute']);

	app.controller('getData',['$scope','testRequest', function($scope,testRequest) {
		$scope.getPriceVolabit = function() {
			testRequest.get().then(function(response) {
				console.log(response.data);
			})
			
		}
		$scope.getPriceVolabit();
		// https://www.volabit.com/api/v1/tickers
	}]);

})();

