/**
 * Máquina de estados
 */
songbookApp .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })

    .state('app.newbook', {
      url: '/newbook',
      views: {
        'menuContent': {
          templateUrl: 'templates/newbook.html',
          controller: 'NewbookCtrl'
        }
      }
    })

    .state('app.bookmarks', {
      cache: false,
      url: '/bookmarks',
      views: {
        'menuContent': {
          templateUrl: 'templates/bookmarks.html',
          controller: 'BookmarksCtrl'
        }
      }
    })

    .state('app.newbookdetail', {
      cache: false,
      url: '/newbookdetail/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/newbook_detail.html',
          controller: 'NewbookDetailCtrl'
        }
      }
    })

    .state('app.home', {
      cache: false,
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
