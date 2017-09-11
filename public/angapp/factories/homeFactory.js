app
	.factory('Home', function ($http, $q) {
		return {
			get: function (word, max) {
				var deferred = $q.defer(),
					url = '/api?word=' + word + '&max_value=' + max;
				$http.get(url).then(function (response) {
					deferred.resolve(response);
				});
				return deferred.promise;
			}
		}
	});



