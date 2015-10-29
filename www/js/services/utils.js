songbookApp.factory('utils', ['mainSettings', 'localstorage', '$q','$rootScope', function(mainSettings, localstorage,$q, $rootScope) {
    return {
      in_array: function(elem, array){
        var counter = 0;
        angular.forEach(array, function(obj){
          if(obj == elem){
            counter++;
          }
        });
        return counter > 0 ? true :  false;
      },
      getRandom: function(init, end){
        return Math.floor((Math.random() * end) + init);
      }
    }
  }]);
