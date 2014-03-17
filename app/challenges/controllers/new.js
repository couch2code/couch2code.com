var fs = require('fs');

module.exports = function($scope, $state, $modal) {
  "use strict";
  $scope.mode = 'New';
  $scope.challenge = {};

  $scope.save = function(challenge) {
    //$scope.challenges.$add(challenge);
    $state.go('challenges.list');
  };

  $scope.addGoal = function() {
    $modal
      .open({
        template: fs.readFileSync(__dirname + '/../templates/goal-modal.html'),
        controller: require('./add-goal.js')
      })
      .then(function() {
        alert('foobar');
      });
  };
};
