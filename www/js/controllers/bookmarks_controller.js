songbookApp.controller('BookmarksCtrl', function($scope, $ionicPopup, $timeout, newBook, $state, $ionicLoading, mainSettings, utils, $ionicListDelegate) {

    $scope.init = function(){
      $scope.mainData = newBook.getBookmarks();
      $ionicListDelegate.closeOptionButtons();
    };

    $scope.getDetail = function(songID){
      $ionicListDelegate.closeOptionButtons();
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
