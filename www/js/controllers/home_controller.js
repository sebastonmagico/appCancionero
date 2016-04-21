songbookApp.controller('HomeCtrl', function($scope, utils, newBook, $state, $timeout, $window, CONSTANTS) {
    
    $scope.init = function(){
      $scope.innerHeight = $window.innerHeight;
      $scope.setted = false;

      //$scope.verseSetted = false;
      newBook.findByID(utils.getRandom(CONSTANTS.SONGBOOK_INITIAL_LIMIT,CONSTANTS.SONGBOOK_FINAL_LIMIT)).then(function(data){
        $timeout(function(){
          $scope.randomSong = data.data[0];
          $scope.randomClass = 'homeBack' + utils.getRandom(1,10);
          $scope.setted = true;
          utils.getVerse().then(function(data){
            $scope.verseSetted = true;
            $scope.verse = data.data;
          }, function(error){
            $scope.verseSetted = true;
            $scope.verse = {
              "reference": "",
              "text": "<h3>Ups!</h3><div>Parece que no tienes conexión a internet.</div>"
            }
          });
        }, 500);
      })

    };

    $scope.goToSong = function(songID){
      $state.go('app.newbookdetail', {id: songID});
    };

    $scope.reloadSlider = function(){
      $scope.setted = false;
      $scope.verseSetted = false;
      newBook.findByID(utils.getRandom(CONSTANTS.SONGBOOK_INITIAL_LIMIT,CONSTANTS.SONGBOOK_FINAL_LIMIT)).then(function(data){
        $timeout(function(){
          $scope.randomSong = data.data[0];
          $scope.randomClass = 'homeBack' + utils.getRandom(1,10);
          $scope.setted = true;
          $scope.verseSetted = true;
        }, 500);
      })
    };


});
