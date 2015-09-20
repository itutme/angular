PmApp.controller('UserCtrl', ['$scope', function($scope) {
    $scope.users = [{'fullName': 'john doe',
                'username': 'john.doe',
                'email': 'john.doe@gmail.com',
                'password': 'janedoe'}];
    $scope.addUser = function(user) {
        if ($scope.newUser.$valid === true) {
            var newUser = {
                'fullName': user.firstName + ' ' + user.lastName,
                'username': user.username,
                'email': user.email,
                'password': user.password
            };
            $scope.users.push(newUser);
            $scope.user = "";
            console.log($scope.users)
            alert('validation success');
        } else {
            alert('Invalid form');
        }
    }
}]);
