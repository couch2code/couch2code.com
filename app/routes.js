var fs = require('fs');

module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      controller: require('./controllers/main'),
      template: fs.readFileSync(__dirname + '/templates/main.html')
    })
    .state('login', {
      url: '/login',
      controller: require('./controllers/login'),
      template: fs.readFileSync(__dirname + '/templates/login.html')
    });
  $locationProvider.html5Mode(true);
};

