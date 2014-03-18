require('angular/angular');
require('ui-router/release/angular-ui-router');
require('firebase/firebase');
require('angularfire/angularfire');
require('simpleLogin/firebase-simple-login');
require('modal');
require('codemirror/ui-codemirror');

angular.module('couch2code', ['ui.router','firebase', 'ui.bootstrap',
  'ui.codemirror',
  require('./challenges').name
  // ,
  // require('./submissions').name,
  // require('./reviews').name
])
  .config(require('./routes'))
  .constant('fireUrl', 'https://couch2code.firebaseio.com')
  .run(require('./run'));
