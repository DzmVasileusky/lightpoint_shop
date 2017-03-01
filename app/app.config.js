angular.module('LPShop').config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, RestangularProvider) {
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('shop', {
      url: '/shop',
      abstract: true,
      template: '<ui-view>'
    })

    .state('shop.list', {
      url: '',
      templateUrl: 'app/components/shop/list.html',
      controller: 'ShopListController'
    })

    .state('shop.id', {
      url: '/:id',
      templateUrl: 'app/components/shop/show.html',
      controller: 'ShopShowController'
    })

    .state('shop.edit', {
      url: '/:id/edit',
      templateUrl: 'app/components/shop/edit.html',
      controller: 'ShopEditController'
    })

    .state('shop.new', {
      url: '/shop/new',
      templateUrl: 'app/components/shop/edit.html',
      controller: 'ShopEditController'
    });

  $urlRouterProvider
    .when('/', '/shop/')

    .otherwise('/shop/');

  RestangularProvider.setBaseUrl('http://localhost:8002/');
}]);