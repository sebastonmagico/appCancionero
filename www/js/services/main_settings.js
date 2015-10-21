songbookApp.factory('mainSettings', ['localstorage', function(localstorage) {
    return {
      set: function(value) {
        localstorage.set('settings', JSON.stringify(value));
      },
      get: function() {
        var current = localstorage.getObject('settings');
        if(angular.equals({}, current)){
          return {
            "font-size": 16,
            "line-height": 20,
            "background-color": "white",
            "color": "#444"
          }
        }
        return current;
      }
    }
  }]);
