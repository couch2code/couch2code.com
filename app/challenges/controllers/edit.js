module.exports = function($scope, fireUrl, $firebase, $stateParams, $state) {
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
  
  $scope.challenge = $firebase(new Firebase([fireUrl, 'challenges', $stateParams.id].join('/')))
  $scope.save = function() {
    $scope.challenge.$save()
    .then(function() {
      $state.go('challenges.list');
    });
  }
};
