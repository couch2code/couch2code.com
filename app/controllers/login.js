module.exports = function($scope, $firebaseSimpleLogin) {
  $scope.loginObj = $firebaseSimpleLogin(new Firebase('https://couch2code.firebaseio.com'));
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

