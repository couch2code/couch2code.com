module.exports = function($rootScope, $firebaseSimpleLogin, $state, fireUrl) {
  var loginRef = new Firebase(fireUrl);
  $rootScope.loginObj = $firebaseSimpleLogin(loginRef);
  
  $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
    // when logged in succeeds
    $state.go('challenges')
  });
  $rootScope.$on('$firebaseSimpleLogin:logout', function(e) {
    // when logged out
    $state.go('main');
  });

};
