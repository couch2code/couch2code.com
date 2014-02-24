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
    .state('challenges', {
      url: '/challenges',
      controller: require('./controllers/challenges/index'),
      template: fs.readFileSync(__dirname + '/templates/challenges/index.html')
    })
    .state('new-challenge', {
      url: '/challenges/new',
      controller: require('./controllers/challenges/new'),
      template: fs.readFileSync(__dirname + '/templates/challenges/form.html')
    })
    .state('show-challenge', {
      url: '/challenges/:id', 
      controller: require('./controllers/challenges/show'),
      template: fs.readFileSync(__dirname + '/templates/challenges/show.html')
    })
    .state('new-submission', {
      url: '/submissions/new',
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
      url: '/reviews/new', 
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

