var fs = require('fs');

module.exports = function($scope, $state, $modal, challenges) {
  "use strict";
  var opts = {
    container: 'epiceditor',
    textarea: null,
    basePath: '/epiceditor',
    clientSideStorage: true,
    localStorageName: 'epiceditor',
    useNativeFullscreen: true,
    parser: marked,
    file: {
      name: 'epiceditor',
      defaultContent: '',
      autoSave: 100
    },
    theme: {
      base: '/themes/base/epiceditor.css',
      preview: '/themes/preview/preview-dark.css',
      editor: '/themes/editor/epic-dark.css'
    },
    button: {
      preview: true,
      fullscreen: true,
      bar: "auto"
    },
    focusOnLoad: false,
    shortcut: {
      modifier: 18,
      fullscreen: 70,
      preview: 80
    },
    string: {
      togglePreview: 'Toggle Preview Mode',
      toggleEdit: 'Toggle Edit Mode',
      toggleFullscreen: 'Enter Fullscreen'
    },
    autogrow: false
  }  
  var editor = new EpicEditor(opts).load();
  window.editor = editor;

  $scope.challenges = challenges;
  $scope.mode = 'New';
  $scope.challenge = { goals: [] };
  //$scope.challenge.description = 'Enter Challenge Description Here!';

  $scope.save = function(challenge) {
    challenge.user = $scope.loginObj.user;
    challenge.created = new Date();
    challenge.description = editor.getElement('editor').body.innerHTML;
    $scope.challenges.$add(challenge);
    $state.go('challenges.list');
  };

  $scope.addGoal = function() {
    $modal
      .open({
          template: fs.readFileSync(__dirname + '/../templates/goal-modal.html'),
          controller: require('./add-goal.js')
      })
      .result
      .then(function(goal) {
        $scope.challenge.goals.push(goal); 
      });
  };

  $scope.cmOption = {
    mode: 'markdown',
    lineNumbers: true
  };

  $scope.removeGoal = function(goal) {
    if (confirm('Are you sure?')) {
      var index = $scope.challenge.goals.indexOf(goal);
      $scope.challenge.goals.splice(index, 1);  
    }
  };
};
