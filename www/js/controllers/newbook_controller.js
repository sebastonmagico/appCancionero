songbookApp.controller('NewbookCtrl', function($scope, $ionicPopup, $timeout, newBook, $state, $ionicLoading, mainSettings, $ionicListDelegate, $ionicScrollDelegate) {

    $scope.init = function(){
      $ionicLoading.show({
        template: 'Cargando...'
      });
      newBook.getAll().then(function(data){
        setTimeout(function() {
          $scope.toSearch = null;
          $scope.bookmarks = mainSettings.getBookmarks();
          $scope.mainData = data.data;
          $ionicListDelegate.closeOptionButtons();
          $ionicLoading.hide();
        }, 100)
      })
    };

    $scope.$watch('toSearch', function() {
      if($scope.toSearch != null){

        //Muestra loader
        $ionicLoading.show({
          template: 'Buscando...'
        });

        //Filtra los resultados
        if($scope.toSearch == ''){

          newBook.getAll().then(function(data){
            setTimeout(function(){
              $scope.mainData = data.data;
              $ionicScrollDelegate.scrollTop();
              $ionicLoading.hide();
            }, 100);

          });
        }
        else{
          if(!isNaN( parseInt($scope.toSearch))){
            newBook.findByID($scope.toSearch).then(function(data){
              $scope.mainData = data.data;
              $ionicScrollDelegate.scrollTop();
              $ionicLoading.hide();
            })
          }
          else{
            newBook.findByName($scope.toSearch).then(function(data){
              $scope.mainData = data.data;
              $ionicScrollDelegate.scrollTop();
              $ionicLoading.hide();
            });
          }
        }
      }
    });

    $scope.getDetail = function(songID){
      $ionicListDelegate.closeOptionButtons();
      $state.go('app.newbookdetail', {id: songID});
    };

    $scope.setBookmark = function(songID){
      //Tenemos el cacheo activado en esta página, por lo que siempre hay que actualizar
      //la info de los favoritos antes y después
      $scope.bookmarks = mainSettings.getBookmarks();
      $scope.bookmarks.push(songID);
      mainSettings.saveBookmarks($scope.bookmarks);
      $ionicListDelegate.closeOptionButtons();
    };

    $scope.removeBookmark = function(songID){
      $scope.bookmarks = mainSettings.getBookmarks();
      var index = $scope.bookmarks.indexOf(songID);
      if (index > -1) {
        $scope.bookmarks.splice(index, 1);
      }
      mainSettings.saveBookmarks($scope.bookmarks);
      $ionicListDelegate.closeOptionButtons();
    };

    $scope.isBookmark = function(songID){
      return newBook.isBookmark(songID);
    };

    $scope.resetSearch = function(){
      $scope.toSearch = "";
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

    $scope.showDetail = function(songID){
       console.log(songID); 
    }





});
