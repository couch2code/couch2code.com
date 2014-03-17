module.exports = function($scope) {
  "use strict";
  console.log('controller loaded');
  $scope.challenges = [{
    title: "Conway's Game of Life",
    avatar: "http://placehold.it/64",
    created: new Date(),
    description: 'Lorem Ipsum'
  }]
  //$scope.challenges = challenges;
};
