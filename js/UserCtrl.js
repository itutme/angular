PmApp.controller('UserCtrl', ['$scope', function ($scope) {
    $scope.users = [];
    $scope.addUser = function(user){
        var newUser = {'username':user.username,'email':user.email,'password':user.password};
        $scope.users.push(newUser);
        $scope.user = "";
    }
}]);