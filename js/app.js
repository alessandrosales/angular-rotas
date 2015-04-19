var app = angular.module('teste', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/pessoas', {
		templateUrl: '/templates/pessoas.html',
		controller: 'PessoasController'
	}).when('/amigos', {
		templateUrl: '/templates/amigos.html',
		controller: 'AmigosController'
	});
}]);

app.controller('IndexController', ['$scope', function($scope){
	console.log('IndexController inicializado...');

}]);

app.controller('PessoasController', ['$scope', '$http', '$routeParams', '$route', function($scope, $http, $routeParams, $route){
	console.log('PessoasController inicializado...');
	$http.get('../json/pessoas.json').success(function(res){
		$scope.pessoas = res.pessoas;
		console.log($routeParams);
		console.log($route.current.$$route.originalPath);
	});
}]);

app.controller('AmigosController', ['$scope', '$http', function($scope, $http){
	console.log('AmigosController inicializado...');
	$http.get('../json/amigos.json').success(function(res){
		$scope.amigos = res.amigos;
	});
}]);