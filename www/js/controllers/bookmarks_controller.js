songbookApp.controller('BookmarksCtrl', function($scope, $ionicPopup, $timeout, newBook, $state, $ionicLoading, mainSettings, utils, $ionicListDelegate) {

    $scope.init = function(){
      $ionicLoading.show({
        template: 'Cargando...'
      });
      newBook.getBookmarks().then(function(data){
        $scope.mainData = data.data;
        $scope.bookmarks = mainSettings.getBookmarks();
        $ionicListDelegate.closeOptionButtons();
        $ionicLoading.hide();
      })
    };

    $scope.getDetail = function(songID){
      $ionicListDelegate.closeOptionButtons();
      $state.go('app.newbookdetail', {id: songID});
    };

    $scope.removeBookmark = function(songID){
      var index = $scope.bookmarks.indexOf(songID);
      if (index > -1) {
        $scope.bookmarks.splice(index, 1);
      }
      mainSettings.saveBookmarks($scope.bookmarks);
      $ionicListDelegate.closeOptionButtons();
      $ionicLoading.show({
        template: 'Cargando...'
      });
      newBook.getBookmarks().then(function(data){
        $scope.mainData = data.data;
        $ionicLoading.hide();
      });
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
