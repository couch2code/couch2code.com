module.exports = function($scope, $firebaseSimpleLogin, $state) {
  $scope.login = function() {
    $scope.loginObj.$login('password', $scope.user)
      .then(function(user) {
        // success
        alert('Successfully Logged In');
      }, function(err) {
        alert('Error with Login');
      });
  };

  $scope.cancel = function() {
    // If paths to the login form come from more than main, then a ui-router
    //   version with the newer "back" function may be better here
    $state.go('main');
  }
};

