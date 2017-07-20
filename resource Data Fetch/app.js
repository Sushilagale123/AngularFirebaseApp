var app = angular.module('myApp', ['ngResource']);

app.service("userService", function($resource){
    
    var data = $resource('https://jsonplaceholder.typicode.com/users/:user', {user: '@user'}, {
        
        update: {
            method: 'PUT'
        }
    });
    
    return data
})



app.controller('myCtrl', function($scope, userService) {
    $scope.users = userService.query();  
    
    $scope.setDataForUser = function(userID){
        
        $scope.currentUser = userService.get({user: userID})
}
});
