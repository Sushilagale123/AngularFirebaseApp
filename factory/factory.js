
var app = angular.module("myApp", []); 

 app.factory("myFactory", function()
{
     var factoryObject = {};
     
     factoryObject.display = function()
     
     {
         
         return "this is factory"
     }
        
     factoryObject.display1 = function()
     
     {
         
         return "this is factory1"
     }
        
     factoryObject.display2 = function()
     
     {
         
         return "this is factory2"
     }
     return factoryObject;
     
});

app.controller("myCtrl", function($scope , myFactory)
    {
     $scope.myName = myFactory.display();
     $scope.myName1 = myFactory.display1();
     $scope.myName2 = myFactory.display2();
     
 });