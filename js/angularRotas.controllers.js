angular.module('angularRotas.controllers', [])

.controller('IndexController', ['$scope', function($scope){
	console.log('IndexController inicializado...');
}])

.controller('PessoasController', ['$scope', '$http', '$routeParams', '$route', function($scope, $http, $routeParams, $route){
	console.log('PessoasController inicializado...');
	$http.get('../json/pessoas.json').success(function(res){
		$scope.pessoas = res.pessoas;
	});
}])

.controller('AmigosController', ['$scope', '$http', function($scope, $http){
	console.log('AmigosController inicializado...');
	$http.get('../json/amigos.json').success(function(res){
		$scope.amigos = res.amigos;
	});
}]);