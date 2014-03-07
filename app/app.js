require('angular/angular');
require('ui-router/release/angular-ui-router');
require('firebase/firebase');
require('angularfire/angularfire');
require('simpleLogin/firebase-simple-login');

angular.module('couch2code', ['ui.router','firebase', 
  require('./challenges').name,
  require('./submissions').name,
  require('./reviews').name
])
  .config(require('./routes'))
  .constant('fireUrl', 'https://couch2code.firebaseio.com')
  .run(require('./run'));
