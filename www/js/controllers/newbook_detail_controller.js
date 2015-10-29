songbookApp.controller('NewbookDetailCtrl', function($scope, $ionicPopup, $timeout, newBook, $stateParams, mainSettings, $state, $ionicActionSheet) {

    $scope.init = function(){
      newBook.findByID($stateParams.id).then(function(data){
        $scope.data = data.data;
        $scope.settings = mainSettings.get();
        $scope.isBookmark = newBook.isBookmark($stateParams.id);
      });
    };

    $scope.goToSettings = function(){
      $state.go('app.settings');
    };


    $scope.showActionSheet = function() {

      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: $scope.isBookmark ? 'Eliminar favorito': 'Añadir favorito' },
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
                if($scope.isBookmark){
                  //Borro el favorito
                  $scope.bookmarks = mainSettings.getBookmarks();
                  var index = $scope.bookmarks.indexOf(parseInt($stateParams.id));
                  if (index > -1) {
                    $scope.bookmarks.splice(index, 1);
                  }
                  mainSettings.saveBookmarks($scope.bookmarks);
                  $scope.isBookmark = false;
                  $ionicPopup.alert({
                    title: '<h3>Éxito!</h3>',
                    template: 'Esta canción ya no pertenece a tu lista de favoritos'
                  })
                }
                else{
                  //Añado elfavorito
                  $scope.bookmarks = mainSettings.getBookmarks();
                  $scope.bookmarks.push( parseInt($stateParams.id));
                  mainSettings.saveBookmarks($scope.bookmarks);
                  $scope.isBookmark = true;
                  $ionicPopup.alert({
                    title: '<h3>Éxito!</h3>',
                    template: 'Esta canción se ha añadido a tu lista de favoritos'
                  });
                }

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
