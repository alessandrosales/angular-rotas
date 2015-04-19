angular.module('angularRotas', ['ngRoute', 'angularRotas.controllers'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/pessoas', {
		templateUrl: '/templates/pessoas.html',
		controller: 'PessoasController'
	}).when('/amigos', {
		templateUrl: '/templates/amigos.html',
		controller: 'AmigosController'
	});
}]);