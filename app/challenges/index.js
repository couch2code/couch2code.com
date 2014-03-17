var fs = require('fs');
var path = require('path');

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
      url: '',
      controller: require('./controllers/list'),
      template: fs.readFileSync(__dirname + '/templates/list.html')
      // ,
      // resolve: {
      //   challenges: function(fireUrl, $firebase) {
      //     console.log('resolve on');
      //     return $firebase(
      //       new Firebase(
      //         path.join(fireUrl, 'challenges')
      //       )
      //     );
      //   }
      // }
    })
    .state('challenges.new', {
      url: '/new',
      controller: require('./controllers/new'),
      template: fs.readFileSync(__dirname + '/templates/form.html')
      //
      // resolve: {
      //   challenges: function(fireUrl, $firebase) {
      //     return $firebase(
      //       new Firebase(
      //         path.join(fireUrl, 'challenges')
      //       )
      //     );
      //   }
      // }

     })
    .state('challenges.edit', {
      url: '/:id/edit',
      controller: require('./controllers/edit.js'),
      template: fs.readFileSync(__dirname + '/templates/form.html'),
      resolve: {
        challenge: function(fireUrl, $firebase, $stateParams) {
          return $firebase(
            new Firebase(
              path.join(fireUrl, 'challenges', $stateParams.id)
            )
          );
        }
      }

    })
    .state('challenges.show', {
      url: '/:id',
      controller: require('./controllers/show.js'),
      template: fs.readFileSync(__dirname + '/templates/show.html'),
      resolve: {
        challenge: function(fireUrl, $firebase, $stateParams) {
          return $firebase(
            new Firebase(
              path.join(fireUrl, 'challenges', $stateParams.id)
            )
          );
        }
      }      
    });
  });
