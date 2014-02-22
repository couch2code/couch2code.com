var fs = require('fs');

module.exports = function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      controller: require('./controllers/main'),
      template: fs.readFileSync(__dirname + '/templates/main.html')
    });
};

