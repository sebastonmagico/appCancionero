songbookApp.factory('utils', ['mainSettings', 'localstorage', function(mainSettings, localstorage) {
    return {
      in_array: function(elem, array){
        var counter = 0;
        angular.forEach(array, function(obj){
          if(obj == elem){
            counter++;
          }
        });
        return counter > 0 ? true :  false;
      }
    }
  }]);
