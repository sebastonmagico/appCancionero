songbookApp.controller('SettingsCtrl', function($scope, $ionicPopup, $timeout, mainSettings, $rootScope) {

    $scope.init = function(){
      var test = $rootScope.mainSettings;
      $scope.mainSettings = mainSettings.get();
    };

    $scope.changeStyle = function(howmany, type){

      switch (howmany){
        case "more":
          $scope.mainSettings[type]= $scope.mainSettings[type] + 1;
              break;

        case "less":
          $scope.mainSettings[type]= $scope.mainSettings[type] - 1;
              break;
      }
    };

    $scope.showAlert = function(title, content) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: content
      });
    };

    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Atención',
        template: 'Tus cambios no se han guardado y se perderán al abandonar esta pantalla.'
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    $scope.saveSettings = function(){
      mainSettings.set($scope.mainSettings);
    };

    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      $scope.saveSettings();
    });

    $scope.changeTheme= function(theme){
      $scope.mainSettings.theme = theme;
      mainSettings.set($scope.mainSettings);
      $rootScope.mainSettings = mainSettings.get();
    }



});
