module.exports = function($scope, $firebaseSimpleLogin) {
  $scope.login = function() {
    $scope.loginObj.$login('password', $scope.user)
      .then(function(user) {
        // success
        alert('Successfully Logged In');
      }, function(err) {
        alert('Error with Login');
      });
  };
};

