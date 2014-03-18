var fs = require('fs');

module.exports = function($scope, $state, $modal, challenges) {
  "use strict";
  $scope.challenges = challenges;
  $scope.mode = 'New';
  $scope.challenge = { goals: [] };

  $scope.save = function(challenge) {
    challenge.user = $scope.loginObj.user;
    challenge.created = new Date();
    $scope.challenges.$add(challenge);
    $state.go('challenges.list');
  };

  $scope.addGoal = function() {
    $modal
      .open({
          template: fs.readFileSync(__dirname + '/../templates/goal-modal.html'),
          controller: require('./add-goal.js')
      })
      .result
      .then(function(goal) {
        $scope.challenge.goals.push(goal); 
      });
  };

  $scope.cmOption = {
    mode: 'markdown',
    lineNumbers: true
  };

  $scope.removeGoal = function(goal) {
    if (prompt('Are you sure?')) {
      var index = $scope.challenge.goals.indexOf(goal);
      $scope.challenge.goals.splice(index, 1);  
    }
  };
};
