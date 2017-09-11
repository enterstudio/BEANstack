'use strict';

app
	.controller('homeController', function ($scope, Home) {

		$scope.Numbers = [];
		$scope.Status = 400;
		$scope.Message = "Hello!";

		$scope.initialize = function() {
			Home.get("fizzbuzz", 2).then(function (home) {
				$scope.Numbers = home.data.numbers;
				$scope.Status = home.data.status;
				$scope.Message = home.data.message;
			});
		};

		$scope.initialize();

		function getMax() {
			return $('#txtInput').val() || 5;
		}

		$scope.fizz = function() {
			var max_value = getMax();
			Home.get("fizz", max_value).then(function (home) {
				$scope.Numbers = home.data.numbers;
				$scope.Status = home.data.status;
				$scope.Message = home.data.message;
			});
		};


		$scope.buzz = function() { 
			var max_value = getMax();
			Home.get("buzz", max_value).then(function (home) {
				$scope.Numbers = home.data.numbers;
				$scope.Status = home.data.status;
				$scope.Message = home.data.message;
			});
		};

		$scope.fizzbuzz = function() { 
			var max_value = getMax();
			Home.get("fizzbuzz", max_value).then(function (home) {
				$scope.Numbers = home.data.numbers;
				$scope.Status = home.data.status;
				$scope.Message = home.data.message;
			});
		};

	});