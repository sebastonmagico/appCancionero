songbookApp.controller('HomeCtrl', function($scope, utils, newBook, $state, $timeout) {

    $scope.init = function(){
      $scope.setted = false;
      $scope.verseSetted = false;
      newBook.findByID(utils.getRandom(1,233)).then(function(data){
        $timeout(function(){
          $scope.randomSong = data.data[0];
          $scope.randomClass = 'homeBack' + utils.getRandom(1,10);
          $scope.setted = true;
          utils.getVerse().then(function(data){
            $scope.verseSetted = true;
            $scope.verse = data.data;
          });
        }, 500);
      })

    };

    $scope.goToSong = function(songID){
      $state.go('app.newbookdetail', {id: songID});
    };

    $scope.reloadSlider = function(){
      $scope.setted = false;
      newBook.findByID(utils.getRandom(1,233)).then(function(data){
        $timeout(function(){
          $scope.randomSong = data.data[0];
          $scope.randomClass = 'homeBack' + utils.getRandom(1,10);
          $scope.setted = true;
        }, 500);
      })
    };


});
