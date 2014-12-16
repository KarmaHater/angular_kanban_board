angular.module('kanbanBoard')
.controller('TodoCtrl', function ($scope) {
  $scope.tasks = [
    { task:"eiko", status: "Todo"},
    { task:"eiko1", status: "Working On"},
    { task:"eiko2", status: "Done"}];
  $scope.data = {
    lists: [
      {label: "Todo"},
      {label: "Working On"},
      {label: "Done"}
    ]};
   $scope.addTodo = function (todo) {
      $scope.tasks.push({task: todo, status: "Todo"})
      $scope.newTodo = ""
    },
    $scope.moveTodo = function () {
      alert("hello")
      // $('.todo').draggable({ containment: 'document', revert: true})
    }
})