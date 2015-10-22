songbookApp.controller('NewbookDetailCtrl', function($scope, $ionicPopup, $timeout, newBook, $stateParams, mainSettings, $state) {

    $scope.init = function(){
      $scope.data = newBook.findByID($stateParams.id);
      $scope.settings = mainSettings.get();
    };

    $scope.goToSettings = function(){
      $state.go('app.settings');
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

});
