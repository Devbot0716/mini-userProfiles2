angular.module('userProfiles')
  .controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	$scope.users = mainService.getUsers().then(function(response){
      $scope.users = response.data.data;
      // console.log($scope.users)
    });
  }


  $scope.getUsers();

});
