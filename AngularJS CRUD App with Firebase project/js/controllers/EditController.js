app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
    function($scope, $location, $routeParams, $firebaseObject, FBURL){

    var ref = new Firebase(FBURL + $routeParams.id);
    $scope.product = $firebaseObject(ref);

    $scope.editProduct = function() {
        $scope.product.$save({
            Product: $scope.product.Product,
            description: $scope.product.description,
            price: $scope.product.price
        });
        $scope.edit_form.$setPristine();
        $scope.product = {};
        $location.path('/products');

    };

}]);