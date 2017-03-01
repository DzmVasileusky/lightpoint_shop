angular.module('LPShop').controller('ShopShowController', ['Shop', '$scope', '$stateParams', function(Shop, $scope, $stateParams) {
  $scope.shop = {};
  $scope.products = {};

  Shop.one($stateParams.id).then(function(data) {
    $scope.shop = data;
  });
}]);