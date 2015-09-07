var PmApp = angular.module('ProjectMgmt', []);
PmApp.controller('ProjectCtrl', ['$scope', function ($scope) {
    $scope.projects = [{'title':'Mobile App Development','startDate':'08/20/2015','endDate':'12/31/2015'},{'title':'Angular web App','startDate':'09/15/2015','endDate':'01/25/2016'},{'title':'Mobile Game','startDate':'08/30/2015','endDate':'12/31/2015'}];

    $scope.count = {'title':0, 'startDate':0, 'endDate':0};
    $scope.$watch("project.title", function(){
        $scope.count.title++;
    });
}]);