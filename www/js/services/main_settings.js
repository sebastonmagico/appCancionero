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
            "theme": ""
          }
        }
        return current;
      },

      getBookmarks: function(){
        var data = localstorage.getObject('bookmarks');
        if(angular.equals(data, {})){
          return []
        }
        else{
          return data;
        }
      },
      deleteBookmark: function(id){

      },
      saveBookmarks: function(obj){
        localstorage.setObject('bookmarks', obj);
        return true;
      }

    }
  }]);
