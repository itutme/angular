var PmApp = angular.module('ProjectMgmt', []);
PmApp.controller('ProjectCtrl', ['$scope', function ($scope) {
    $scope.project = {'title':'Mobile App Development','startDate':'08/20/2015','endDate':'12/31/2015'};

    $scope.count = {'title':0, 'startDate':0, 'endDate':0};
    $scope.$watch("project.title", function(){
        $scope.count.title++;
    });
}]);