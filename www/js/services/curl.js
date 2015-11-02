songbookApp.factory('curl', ['$window', '$http', 'utils', function($window, $http, utils) {

  var url = "https://es.bibles.org/v2/chapters/eng-KJVA:1Cor.2/verses.js";
  var token = "gDhmWP1FmwXWIeR5j6Xv5We3JnAwY8unOIumLlAC";
  return {
    getVerse: function(){
      var encodedUserNameAndPassword = utils.base64_encode(token + ':X');
      debugger;
      $http.defaults.headers.common['Authorization'] = 'Basic ' + encodedUserNameAndPassword;
      $http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      return $http({
        url: url,
        method: 'JSONP',
        headers: {'Content-Type': 'application/json'}
      }).success(function (data, status, headers, config) {
        console.log('chanando');
        debugger;
        return true;
      }).error(function (data, status, headers, config) {
        console.log('mierdas');
        return false;
      });

    }
  }
}]);
