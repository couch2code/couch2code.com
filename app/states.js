var fs = require('fs');

module.exports = function($stateProvider, $urlRouterProvider) {
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
    })
    .state('new-submission', {
      url: '/submissions/new?challenge',
      controller: require('./controllers/submissions/new'),
      template: fs.readFileSync(__dirname + '/templates/submissions/form.html')
    })
    .state('show-submission', {
      url: '/submissions/:id',
      controller: require('./controllers/submissions/show'),
      template: fs.readFileSync(__dirname + '/templates/submissions/show.html')
    })
    .state('edit-submission', {
      url: '/submissions/:id/edit',
      controller: require('./controllers/submissions/edit'),
      template: fs.readFileSync(__dirname + '/templates/submissions/form.html')
    })
    .state('new-review', {
      url: '/reviews/new?submission', 
      controller: require('./controllers/reviews/new'),
      template: fs.readFileSync(__dirname + '/templates/reviews/form.html')
    })
    .state('show-review', {
      url: '/reviews/:id',
      controller: require('./controllers/reviews/show'),
      template: fs.readFileSync(__dirname + '/templates/reviews/show.html')
    })
    .state('edit-review', {
      url: '/reviews/:id/edit',
      controllers: require('./controllers/reviews/edit'),
      template: fs.readFileSync(__dirname + '/templates/reviews/form.html')
    });
};

