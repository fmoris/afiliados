var afiliados = angular.module('afiliados', ['ngRoute']);
afiliados.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'sistema/buscador/buscador.html',
                controller: 'buscadorController'
            })              
            .otherwise({
                redirectTo: '/'
            })
    }
]);

