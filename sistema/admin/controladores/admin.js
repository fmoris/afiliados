afiliados.controller('adminController', function(ngTableParams, $scope, $http, $routeParams, $location, $filter) {

    $scope.resultado = false;

    $scope.listaRegiones = function(){
        $http.get('sistema/admin/php/listaRegiones.php')
        .success(function(regiones){
            $scope.listaRegiones = regiones;           
        })
    }

    $scope.Afiliados = function(){
        $scope.Numero = {};
        $http.get('sistema/admin/php/listaAfiliados.php', {
            params: {
                region: $scope.Numero.Numero,
                nombre: $scope.nombre,
                rut: $scope.rut
            }
        }).success(function(afiliados) {   

            $scope.data = afiliados;
            $scope.tableParams = new ngTableParams({
             page: 1, // show first page
             count: 5, // count per page
             total: $scope.data.length,
             sorting: {
                 Orden: 'asc' // initial sorting
             }
         }, {
             total: $scope.data.length, // length of data                          
             getData: function($defer, params) { // use build-in angular filter
                 var orderedData = params.sorting ?
                     $filter('orderBy')($scope.data, params.orderBy()) :
                     data;
                 orderedData = params.filter ?
                     $filter('filter')(orderedData, params.filter()) :
                     orderedData;


                 $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                 params.total(orderedData.length); // set total for recalc pagination
                 $defer.resolve($scope.users);
             }
         });
         $scope.total = $scope.data.length;
     });
        var inArray = Array.prototype.indexOf ?
         function(val, arr) {
             return arr.indexOf(val)
         }:
         function(val, arr) {
             var i = arr.length;
             while (i--) {
                 if (arr[i] === val) return i;
             }
             return -1
         };

    }

    $scope.edita = function(afiliado){
        $scope.afiliado = {};
        $scope.afiliado = afiliado;
        

    }

	/*$scope.listaOrdenes = function(){

              
     

     $scope.pacientes = function(column) {
         var def = $q.defer(),
             arr = [],
             names = [];
         $scope.data = $scope.data;
         $scope.$watch('data', function() {
             angular.forEach($scope.data, function(item) {
                 if (inArray(item.paciente, arr) === -1) {
                     arr.push(item.paciente);
                     names.push({
                         'id': item.paciente,
                         'title': item.paciente
                     });
                 }
             });
         });
         def.resolve(names);
         return def;
     };*/

     /*$scope.estados = function(column) {
         var def = $q.defer(),
             arr = [],
             names = [];
         $scope.data = $scope.data;
         $scope.$watch('data', function() {
             angular.forEach($scope.data, function(item) {
                 if (inArray(item.estado, arr) === -1) {
                     arr.push(item.estado);
                     names.push({
                         'id': item.estado,
                         'title': item.estado
                     });
                 }
             });
         });
         def.resolve(names);
         return def;
     };*/
    /* $scope.pagados = function(column) {
         var def = $q.defer(),
             arr = [],
             names = [];
         $scope.data = $scope.data;
         $scope.$watch('data', function() {
             angular.forEach($scope.data, function(item) {
                 if (inArray(item.pagado, arr) === -1) {
                     arr.push(item.pagado);
                     names.push({
                         'id': item.pagado,
                         'title': item.pagado
                     });
                 }
             });
         });
         def.resolve(names);
         return def;
     };*/

     /*$scope.clasificaciones = function(column) {
         var def = $q.defer(),
             arr = [],
             names = [];
         $scope.data = $scope.data;
         $scope.$watch('data', function() {
             angular.forEach($scope.data, function(item) {
                 if (inArray(item.clasificacion, arr) === -1) {
                     arr.push(item.clasificacion);
                     names.push({
                         'id': item.clasificacion,
                         'title': item.clasificacion
                     });
                 }
             });
         });
         def.resolve(names);
         return def;
     };*/
    
    
})