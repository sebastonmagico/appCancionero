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

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/settings');
});
