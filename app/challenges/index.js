module.exports = angular.module('challenges', [])
  .config(function($stateProvider) {
    "use strict";

    $stateProvider
    .state('challenges', {
      url: '/challenges',
      abstract: true,
      template: '<div ui-view></div>'
    })
    .state('challenges.list', {
      url: '/',
      controller: require('./controllers/list'),
      template: fs.readFileSync(__dirname + '/templates/list.html')
    })
    .state('challenges.new', {
      url: '/new',
      controller: require('./controllers/new'),
      template: fs.readFileSync(__dirname + '/templates/form.html')
     });
  });
