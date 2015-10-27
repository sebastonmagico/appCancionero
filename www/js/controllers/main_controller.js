songbookApp.controller('MainCtrl', function($scope, mainSettings, $rootScope) {
  $rootScope.mainSettings = mainSettings.get();
});
