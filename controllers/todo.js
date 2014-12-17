angular.module('kanbanBoard')
.controller('TodoCtrl', function ($scope) {
  $scope.tasks = [];
   $scope.addTodo = function (todo) {
      if (todo !== undefined && todo !== "") {
        $scope.tasks.push({task: todo, status: "Todo"})
      };
      $scope.newTodo = ""
    };
    $scope.dropSuccessHandler = function($event, item){
      item.status = $scope.newLocation
    };
    $scope.onDrop = function($event,$data, location){
      $scope.newLocation = location
    };
    $scope.deleteTask = function (item) {
      for (var i = 0; i < $scope.tasks.length; i++) {
        if (item.task === $scope.tasks[i].task ) {
          $scope.tasks.splice(i, 1)
        };
      };
    }
})