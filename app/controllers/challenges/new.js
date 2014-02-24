module.exports = function($scope, challenges, $state) {
  $scope.challenges = challenges;
  $scope.state = 'New';
  $scope.save = function(state) {
    $scope.challenge.state = state;
    $scope.challenges.$add($scope.challenge);
    $state.go('challenges');
  }
};
