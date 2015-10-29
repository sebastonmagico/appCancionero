songbookApp.controller('MainCtrl', function($scope, mainSettings,$rootScope, utils) {
  $rootScope.mainSettings = mainSettings.get();;
});
