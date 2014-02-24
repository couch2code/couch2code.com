require('angular/angular');
require('ui-router/release/angular-ui-router');
require('firebase/firebase');
require('angularfire/angularfire');
require('simpleLogin/firebase-simple-login');

angular.module('couch2code', ['ui.router','firebase'])
  .config(require('./states'))
  .constant('fireUrl', 'https://couch2code.firebaseio.com')
  .run(require('./run'));
