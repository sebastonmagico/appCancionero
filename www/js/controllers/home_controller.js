songbookApp.controller('HomeCtrl', function($scope, utils, newBook, $state, $timeout) {

    $scope.init = function(){
      $scope.setted = false;
      newBook.findByID(utils.getRandom(1,233)).then(function(data){
        $timeout(function(){
          $scope.randomSong = data.data[0];
          $scope.randomClass = 'homeBack' + utils.getRandom(1,10);
          $scope.setted = true;
        }, 1000);
      })
    };

    $scope.goToSong = function(songID){
      $state.go('app.newbookdetail', {id: songID});
    };


});
