module.exports = function($scope, challenge) {
  $scope.challenge = challenge;
  $scope.save = function() {
    $scope.challenge.$save();
  }
};
