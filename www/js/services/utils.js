songbookApp.factory('utils', ['mainSettings', 'localstorage', '$q','$rootScope', '$http', function(mainSettings, localstorage,$q, $rootScope, $http) {

  var versesApi = "http://backCancionero.eu-gb.mybluemix.net";

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
      },

      getVerse: function(){
        return $http({
          method: 'GET',
          url: versesApi + '/get_verse'
        }).success(function(data){
          return data;
        }).error(function(){
          return null ;
        });
      }

    }
  }]);
