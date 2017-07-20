app.controller("myCtrl", function($scope, $firebaseObject){

    var ref = new Firebase('https://fir-project-f160a.firebaseio.com/student'); 

    var syncObject = $firebaseObject(ref); 

    syncObject.$bindTo($scope, "student");

       

})
