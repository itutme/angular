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

PmApp.filter('capitalize', function() {
    return function(s) {
        s = (s === undefined || s === null) ? '' : s;
        return s.toString().toLowerCase().replace(/\b([a-z])/g, function(ch) {
            return ch.toUpperCase();
        });
    };
});