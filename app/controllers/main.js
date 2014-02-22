module.exports = function($scope, $firebase) {
  // controller logic here
  $scope.emails = $firebase(new Firebase('https://couch2code.firebaseio.com/emails'));

  $scope.addEmail = function(email) {
    $scope.emails.$add(email);
    $scope.email = "";
    $scope.completed = true;
  };
};
