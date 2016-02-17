var afiliados = angular.module('afiliados', ['ngRoute', 'ngTable']);
afiliados.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'sistema/buscador/buscador.html',
                controller: 'buscadorController'
            })
            .when('/admin', {
                templateUrl: 'sistema/admin/admin.html',
                controller: 'adminController'
            })              
            .otherwise({
                redirectTo: '/'
            })
    }
]);

