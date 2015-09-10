PmApp.controller('UserCtrl', ['$scope', function ($scope) {
    $scope.users = [];

    $scope.addUser = function(user){
        if($scope.newUser.$valid === true){
            var newUser = {'fullname':user.fullname,'username':user.username,'email':user.email,'password':user.password};
            $scope.users.push(newUser);
            $scope.user = "";
        }
        else{
            alert('Invalid form');
        }
    }
}]);