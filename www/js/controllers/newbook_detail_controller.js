songbookApp.controller('NewbookDetailCtrl', function($scope, $ionicPopup, $timeout, newBook, $stateParams, mainSettings) {

    $scope.init = function(){
      $scope.data = newBook.findByID($stateParams.id);
      $scope.settings = mainSettings.get();
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
