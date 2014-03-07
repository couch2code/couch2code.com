module.exports = function($scope, $state, challenges) {
  "use strict";

  $scope.challenges = challenges;
  $scope.save = function(challenge) {
    $scope.challenges.$add(challenge);
    $state.go('challenges.list');
  };
};
