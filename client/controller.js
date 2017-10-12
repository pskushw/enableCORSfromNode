app.controller('myCtrl', function($scope,myService) {
//    $scope.products = ["Milk", "Bread", "Cheese"];
//    $scope.addItem = function() {
//        $scope.products.push($scope.newItem);
//    };
//    $scope.removeItem = function(x) {
//        $scope.products.splice(x,1);
//    }
    myService.getServiceData().then(function(reponse){
        $scope.sites = reponse.data.sites;
        console.log($scope.sites);
    });
    
    
});

app.service("myService", function($http) {
    this.getServiceData = function() {
      return $http.get("http://localhost:3000/api/some");
    }      
});