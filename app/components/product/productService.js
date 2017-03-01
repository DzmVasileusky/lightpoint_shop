angular.module('LPShop').factory('Product', ['Restangular', function(Restangular) {

  function getAll() {
    return Restangular.all('products').getList();
  };

  function getByShop(shopId) {
    return Restangular.all('products').getList({
      shop: shopId
    });
  };

  function getOne(id) {
    return Restangular.one('products', id).get();
  };

  return {
    all: getAll,
    one: getOne,
    byShop: getByShop
  }
}]);