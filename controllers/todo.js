angular.module('kanbanBoard')
.controller('TodoCtrl', function ($scope) {
  $scope.tasks = [];
   $scope.addTodo = function (todo) {
      $scope.tasks.push({task: todo, status: "Todo"})
      $scope.newTodo = ""
    };
    $scope.dropSuccessHandler = function($event, item){
      item.status = $scope.newLocation
    };
    $scope.onDrop = function($event,$data, location){
      $scope.newLocation = location
    };
})