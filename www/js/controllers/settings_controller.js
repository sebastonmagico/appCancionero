songbookApp.controller('SettingsCtrl', function($scope, $ionicPopup, $timeout, mainSettings) {

    $scope.init = function(){
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

        case "white":
          $scope.mainSettings['background-color']= "white";
          $scope.mainSettings['color']= '#444';
              break;
        case "black":
          $scope.mainSettings['background-color']= "black";
          $scope.mainSettings['color']= 'white';
              break;
      }
    };

    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Éxito!',
        template: 'Configuración guardada correctamente'
      });
      alertPopup.then(function(res) {
        console.log('Alert de confirmación cerrado');
      });
    };

    $scope.saveSettings = function(){
      mainSettings.set($scope.mainSettings);
      $scope.showAlert();
    };



});
