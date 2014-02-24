module.exports = function($scope, $firebase, $firebaseSimpleLogin, $state) {
  $scope.register = function(user) {
    $scope.loginObj.$createUser(user.email, user.password, false);
    $state.go('challenges');
  };
};
