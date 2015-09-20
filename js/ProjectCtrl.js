PmApp.controller('ProjectCtrl', ['$scope', function($scope) {
    $scope.projects = [{
        'title': 'angular tutorial',
        'description': 'Create fast-track Angular Tutorial ',
        'startDate': '2015-08-20',
        'endDate': '2015-12-31'
    }, {
        'title': 'mobile app development',
        'description': 'Development of mobile App using Titanium',
        'startDate': '2015-08-02',
        'endDate': '2016-02-31'
    }, {
        'title': 'angular web app',
        'description': 'Develop web app using AngularJs',
        'startDate': '2015-09-15',
        'endDate': '2016-01-25'
    }];

    $scope.projects = [];
    $scope.addProject = function(project) {
        if ($scope.newProject.$valid === true) {
            var newproject = {
                'title': project.title,
                'description': project.description,
                'startDate': project.startDate,
                'endDate': project.endDate
            };
            $scope.projects.push(newproject);
            $scope.project = "";
            alert('validation success');
            console.log($scope.projects);
        } else {
            alert('Invalid form');
        }
    }
}]);
