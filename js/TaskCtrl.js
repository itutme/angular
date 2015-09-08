PmApp.controller('TaskCtrl', ['$scope', function ($scope) {
$scope.tasks = [];
    $scope.addTask = function(task){
        var newTask = {'projectId':task.projectId,'title':task.title,'assignTo':task.assignTo};
        $scope.tasks.push(newTask);
        $scope.task = "";
    }
}]);