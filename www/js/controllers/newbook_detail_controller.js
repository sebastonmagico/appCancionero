songbookApp.controller('NewbookDetailCtrl', function($scope, $ionicPopup, $timeout, newBook, $stateParams, mainSettings, $state, $ionicActionSheet) {

    $scope.init = function(){
      $scope.data = newBook.findByID($stateParams.id);
      $scope.settings = mainSettings.get();
    };

    $scope.goToSettings = function(){
      $state.go('app.settings');
    };


    $scope.showActionSheet = function() {

      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: 'Marcar como favorito' },
          { text: 'Ajustes' }
        ],
        titleText: 'Opciones disponibles',
        cancelText: 'Cancelar',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          switch (index){
            case 0:
                $scope.bookmarks = mainSettings.getBookmarks();
                $scope.bookmarks.push( parseInt($stateParams.id));
                mainSettings.saveBookmarks($scope.bookmarks);
                $ionicPopup.alert({
                  title: 'Éxito!',
                  template: 'Esta canción se ha añadido a tu lista de favoritos'
                });
                hideSheet();

                  break;
            case 1:
              $scope.goToSettings();
                  break;
          }
        }
      });

    };

});
