PmApp.controller('TaskCtrl', ['$scope', function($scope) {
    $scope.tasks = [{
        'projectId': '2',
        'title': 'frontend design',
        'description': 'frontend design for Angular web application',
        'priority': 'Major',
        'estHour': '10',
        'startDate': '2015-08-21',
        'endDate': '2015-08-30',
        'assignTo': '1'
    }];
    $scope.addTask = function(task) {
        if ($scope.newTask.$valid === true) {
            var newTask = {
                'projectId': task.projectId,
                'title': task.title,
                'description': task.description,
                'priority': task.priority,
                'estHour': task.estHour,
                'startDate': task.startDate,
                'endDate': task.endDate,
                'assignTo': task.assignTo
            };
            $scope.tasks.push(newTask);
            $scope.task = "";
            alert('validation success');
            console.log($scope.tasks);
        } else {
            alert('Invalid form');
        }

    }
}]);
