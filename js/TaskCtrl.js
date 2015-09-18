PmApp.controller('TaskCtrl', ['$scope', function ($scope) {
$scope.tasks = [];
    $scope.addTask = function(task){
        var newTask = {
            'projectId':task.projectId,
            'title':task.title,
            'description':task.description,
            'priority':task.priority,
            'estHour': task.estHour,
            'startDate':task.startDate,
            'endDate':task.endDate,
            'assignTo':task.assignTo
        };
        $scope.tasks.push(newTask);
        $scope.task = "";
    }
}]);