var PmApp = angular.module('ProjectMgmt', []);
PmApp.controller('ProjectCtrl', ['$scope', function ($scope) {
     $scope.projects = [{'title':'Angular Tutorial', 'description':'Create fast-track Angular Tutorial ', 'startDate':'08/20/2015', 'endDate':'12/31/2015'},{'title':'Mobile App Development', 'description': 'Development of mobile App using Titanium', 'startDate':'08/02/2015', 'endDate':'02/31/2016'},{'title':'Angular web App', 'description':'Develop web app using AngularJs', 'startDate':'09/15/2015', 'endDate':'01/25/2016'}];

    $scope.count = {'title':0, 'startDate':0, 'endDate':0};
    $scope.$watch("project.title", function(){
        $scope.count.title++;
    });
}]);