songbookApp.controller('NewbookCtrl', function($scope, $ionicPopup, $timeout, newBook, $state, $ionicLoading, mainSettings, utils, $ionicListDelegate) {

    $scope.init = function(){
      $scope.mainData = newBook.getAll();
      $scope.toSearch = null;
      $scope.bookmarks = mainSettings.getBookmarks();
      $ionicListDelegate.closeOptionButtons();
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
          if(!isNaN( parseInt($scope.toSearch))){
            $scope.mainData = newBook.findByID($scope.toSearch);
          }
          else{
            $scope.mainData = newBook.findByName($scope.toSearch);
          }
        }

        //Oculta el loader
        $ionicLoading.hide();
      }
    });

    $scope.getDetail = function(songID){
      $ionicListDelegate.closeOptionButtons();
      $state.go('app.newbookdetail', {id: songID});
    };

    $scope.setBookmark = function(songID){
      $scope.bookmarks.push(songID);
      mainSettings.saveBookmarks($scope.bookmarks);
      $ionicListDelegate.closeOptionButtons();
    };

    $scope.removeBookmark = function(songID){
      var index = $scope.bookmarks.indexOf(songID);
      if (index > -1) {
        $scope.bookmarks.splice(index, 1);
      }
      mainSettings.saveBookmarks($scope.bookmarks);
      $ionicListDelegate.closeOptionButtons();
    };

    $scope.isBookmark = function(songID){
      return utils.in_array(songID, mainSettings.getBookmarks());
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





});
