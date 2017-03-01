angular.module('LPShop').controller('ShopListController', ['Shop', '$scope', function(Shop, $scope) {
  $scope.shops = [];
  
  Shop.all().then(function(data) {
    $scope.shops = data;
  });

  $scope.updateOrder = function(shops) {
    Shop.updateMulti(shops);
  };
}]);