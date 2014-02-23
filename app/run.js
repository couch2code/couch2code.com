module.exports = function($rootScope, $firebaseSimpleLogin) {
  $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
    // when logged in sucdess
  });
  $rootScope.$on('$firebaseSimpleLogin:logout', function(e) {
    // when logged out
  });

};
