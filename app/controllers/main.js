module.exports = function($scope, $firebase, $firebaseSimpleLogin) {
  var loginRef = new Firebase('https://couch2code.firebaseio.com');
  $scope.loginObj = $firebaseSimpleLogin(loginRef);
};
