app.controller('AddController', ['$scope', '$firebaseArray', '$location', 'FBURL', function($scope, $firebaseArray, $location, FBURL){

  $scope.addProduct = function() {
    var ref = new Firebase(FBURL);
    var product = $firebaseArray(ref);
    product.$add({
      Product: $scope.product.Product,
      description: $scope.product.description,
      price: $scope.product.price
    });
    $location.path('/');
  };

}]);