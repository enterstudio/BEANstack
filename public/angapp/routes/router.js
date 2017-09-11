'use strict';

app
	.config(function ($routeProvider) {
		$routeProvider
			.when('/home', {
				controller: 'homeController',
				templateUrl: 'angapp/partials/homePartial.html'
			})
			.otherwise('/home');
	});