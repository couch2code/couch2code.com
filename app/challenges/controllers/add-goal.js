module.exports = function($scope, $modalInstance) {
  $scope.ok = function(goal) {
    $modalInstance.close(goal);
  };
  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
};