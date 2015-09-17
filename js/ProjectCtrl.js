var PmApp = angular.module('ProjectMgmt', []);
PmApp.controller('ProjectCtrl', ['$scope', function ($scope) {
    $scope.project = {'title':'Angular Tutorial','description':'Create fast-track Angular Tutorial ', 'startDate':'08/20/2015','endDate':'12/31/2015'};
}]);