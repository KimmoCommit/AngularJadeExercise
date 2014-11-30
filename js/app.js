var app = angular.module("elementApp", ['ngRoute']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

	$routeProvider
	.when("/", {
		templateUrl: '../views/other.html',
		title: 'Other',
		controller:'elementController'
	})
	.when("/home", {
		templateUrl: '../views/home.html',
		title:'Home',
	})
	.otherwise({ redirectTo: '/'});

}]);


app.controller('elementController', ['$scope','$http', function($scope, $http){
	$scope.elementCount = [];
	$http.get('../res/elements.json').
	then(function(res){
		$scope.elementCount = res.data;
	});

}]);


app.run(['$location', '$rootScope', function($location, $rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		$rootScope.title = current.$$route.title;
	});
}]);


	/*
	.config(
	function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');
	//$locationProvider.html5Mode(true);
	$routeProvider.when("/", { templateUrl: "home.html" }).
	when("/other", { templateUrl: "other.html"});
	/*when("/persons/:id",
		{ templateUrl: "partials/person_details.html",
		controller: "ShowCtrl" }).
otherwise( { redirectTo: "/" });});

//$locationProvider.hashPrefix('!');s
	//$locationProvider.html5Mode(true);
	//$locationProvider.hashPrefix('');
	**/


