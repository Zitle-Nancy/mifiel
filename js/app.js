(function() {
	var app = angular.module('btc', ['testService','ngRoute']);

	app.controller('getData',['$scope','testRequest', function($scope,testRequest) {
		function getPriceVolabit() {
			testRequest.getDataVolabit().then(function(response) {
				$scope.priceUsdvolabit = Number(response.data.btc_usd_buy);
				$scope.priceMxnvolabit = ($scope.priceUsdvolabit * $scope.mxn).toFixed(2);
				// $scope.priceBuyMnx = response.data.btc_mxn_buy;
				getPercentage();			
			})
		}
		getPriceVolabit();

		function getPriceBitso () {
			testRequest.getDataBitso().then(function(response) {
				// console.log(response.data.payload);
			})
		};
		// getPriceBitso();

		function getPriceBitstamp() {
			testRequest.getDataBitstamp().then(function(response) {
				$scope.priceUsdBitstamp = response.data.ask;
				$scope.priceMxnBitstamp = (Number($scope.priceUsdBitstamp) * $scope.mxn).toFixed(2);
				console.log($scope.priceMxnBitstamp);
				// console.log($scope.proceUsdBitstamp );
			})
		};
		getPriceBitstamp();

		function getPriceMxn() {
			testRequest.getPriceMxn().then(function(response) {
				$scope.mxn = response.data.rates.MXN;
			})
		};
		getPriceMxn();

		function getPercentage() {
			var  difference = Number($scope.priceMxnvolabit) - Number($scope.priceMxnBitstamp);
			var divideTheDifference = difference / Number($scope.priceMxnBitstamp);
			$scope.percentage =  (divideTheDifference * 100).toFixed(2);
		};
	}]);

})();

