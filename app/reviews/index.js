var fs = require('fs');

module.exports = angular.module('c2c.reviews', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('reviews', {
        url: '/reviews',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('reviews.list', {
        url: '',
        controller: require('./controllers/list'),
        template: fs.readFileSync(__dirname + '/templates/list.html'),
        resolve: {
          reviews: function(fireUrl, $firebase, $stateParams) {
            return $firebase(
              new Firebase(
                path.join(fireUrl, 'reviews')
              ).query($stateParams.submitId)
            )
          }
        }
      })
      .state('reviews.new', {
        url: '/new',
        controller: require('./controllers/new'),
        template: fs.readFileSync(__dirname + '/template/new.html'),
        resolve: {
        reviews: function(fireUrl, $firebase, $stateParams) {
          return $firebase(
            (new Firebase(
                path.join(fireUrl, 'reviews')
              )).query($stateParams.submitId)
            )
          }
        }
       
      })
      .state('reviews.show', {
        url: '/:id',
        controlller: require('./controllers/show'),
        template: fs.readFileSync(__dirname + '/templates/show.html')      
      })
      .state('reviews.edit', {
        url: '/:id/edit',
        controller: require('./controllers/edit'),
        template: fs.readFileSync(__dirname + '/templates/edit.html')
      })
      ;
  });
