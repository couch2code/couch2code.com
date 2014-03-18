var fs = require('fs');

module.exports = angular.module('c2c.submits', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('submits', {
        url: '/submits',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('submits.list', {
        url: '',
        controller: require('./controllers/list'),
        template: fs.readFileSync(__dirname + '/templates/list.html')
      })
      .state('submits.new', {
        url: '/new',
        controller: require('./controllers/new'),
        template: fs.readFileSync(__dirname + '/template/new.html')
      })
      .state('submits.show', {
        url: '/:id',
        controlller: require('./controllers/show'),
        template: fs.readFileSync(__dirname + '/templates/show.html')      
      })
      .state('submits.edit', {
        url: '/:id/edit',
        controller: require('./controllers/edit'),
        template: fs.readFileSync(__dirname + '/templates/edit.html')
      })
      ;
  });