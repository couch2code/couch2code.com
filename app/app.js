require('angular/angular');
require('ui-router/release/angular-ui-router');
require('firebase/firebase');
require('angularfire/angularfire');

angular.module('couch2code', ['ui.router','firebase'])
  .config(require('./states'))
