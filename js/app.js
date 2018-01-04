(function() {
	var app = angular.module('btc', ['testService','ngRoute']);

	app.controller('getData',['$scope','testRequest','$interval', function($scope,testRequest,$interval) {
		function getPriceVolabit() {
			testRequest.getDataVolabit().then(function(response) {
				$scope.priceUsdvolabit = Number(response.data.btc_usd_buy);
				$scope.priceMxnvolabit = response.data.btc_mxn_buy;
			})
		}
		
		function getPriceBitso () {
			testRequest.getDataBitso().then(function(response) {
				// console.log(response.data.payload);
			})
		};

		function getPriceBitstamp() {
			testRequest.getDataBitstamp().then(function(response) {
				$scope.priceUsdBitstamp = response.data.ask;
				$scope.priceMxnBitstamp = (Number($scope.priceUsdBitstamp) * $scope.mxn).toFixed(2);
			})
		};
		
		function getPriceMxn() {
			testRequest.getPriceMxn().then(function(response) {
				$scope.mxn = response.data.rates.MXN;
			})
		};
		function getPercentage() {
			var  difference = Number($scope.priceMxnvolabit) - Number($scope.priceMxnBitstamp);
			var divideTheDifference = difference / Number($scope.priceMxnBitstamp);
			$scope.percentage =  (divideTheDifference * 100).toFixed(2);
		};

		$interval(getPriceVolabit,100);
		$interval(getPriceBitstamp,100);
		$interval(getPriceMxn,100);
		$interval(getPercentage,100);	
	}]);

})();

