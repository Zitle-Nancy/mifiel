(function() {
	var app = angular.module('btc', ['testService','ngRoute']);

	app.controller('getData',['$scope','testRequest', function($scope,testRequest) {
		$scope.getPriceVolabit = function() {
			testRequest.getDataVolabit().then(function(response) {
				// console.log(response);
				$scope.priceMxnvolabit = response.data.btc_mxn_buy;
				$scope.priceUsdvolabit = response.data.btc_usd_buy;
			})
			
		}
		$scope.getPriceVolabit();

		$scope.getPriceBitso = function() {
			testRequest.getDataBitso().then(function(response) {
				// console.log(response.data.payload);
			})
		}
		// $scope.getPriceBitso();

		$scope.getPriceBitstamp = function() {
			testRequest.getDataBitstamp().then(function(response) {
				$scope.proceUsdBitstamp = response.data.ask;
				console.log($scope.proceUsdBitstamp );
			})
		}
		$scope.getPriceBitstamp();
	}]);

})();

