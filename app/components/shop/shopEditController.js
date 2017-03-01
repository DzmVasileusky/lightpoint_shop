angular.module('LPShop').controller('ShopEditController', ['Shop', 'Product', '$scope', '$state', '$stateParams', function(Shop, Product, $scope, $state, $stateParams) {
  $scope.isSubmitting = false;
  $scope.shop = {};
  $scope.products = [];

  if ($stateParams.id) {
    $scope.title = 'Edit';
    $scope.shop = Shop.one($stateParams.id).then(function(data) {
      $scope.shop = data;
      $scope.title += ' ' + $scope.shop.name;
    });
  } else {
    $scope.title = 'Create new Shop';
  }

  Product.all().then(function(data) {
    $scope.products = data;
  });

  $scope.save = function(shop) {
    $scope.isSubmitting = true;
    Shop.save(shop).then(function(data) {
      $state.go('shop.id', { id: data.id });
    }).finally(function() {
      $scope.isSubmitting = false;
    });
  };
}]);