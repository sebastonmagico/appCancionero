songbookApp.controller('NewbookCtrl', function($scope, $ionicPopup, $timeout, newBook, $state, $ionicLoading) {

    $scope.init = function(){
      $scope.mainData = newBook.getAll();
      $scope.toSearch = null;
    };

    $scope.$watch('toSearch', function() {

      if($scope.toSearch != null){
        //Muestra loader
        $ionicLoading.show({
          template: 'Buscando...'
        });

        //Filtra los resultados
        if($scope.toSearch == ''){
          $scope.mainData = newBook.getAll();
        }
        else{
          $scope.mainData = newBook.findByID($scope.toSearch);
        }

        //Oculta el loader
        $ionicLoading.hide();
      }
    });

    $scope.getDetail = function(songID){
      $state.go('app.newbookdetail', {id: songID});
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
