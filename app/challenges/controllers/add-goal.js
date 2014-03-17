module.exports = function($scope, $modalInstance) {
  $scope.ok = function() {
    $modalInstance.close();
  };
  $scope.cancel = function() {
    $modalInstance.close();
  };
};