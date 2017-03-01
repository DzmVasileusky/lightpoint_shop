angular.module('LPShop').factory('Shop', ['Restangular', function(Restangular) {
  
  function getAll() {
    return Restangular.all('shops').getList();
  };

  function getOne(id) {
    return Restangular.one('shops', id).get();
  };

  function save(shop) {
    return shop.id ? shop.save() : Restangular.all('shops').post(shop);
  };

  function updateMulti(shops) {
    shops.forEach(function(shop) {
      shop.save();
    });
  };

  return {
    all: getAll,
    one: getOne,
    save: save,
    updateMulti: updateMulti
  }
}]);