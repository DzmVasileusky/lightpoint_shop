var _ = require('lodash');
var Product = require('../models/products');

var shops = [
  { "id": "1", "order": "1", "name": "Express", "address": "Минск, ул. Казимировская, 6", "workingHours": "9:00 - 20:00" },
  { "id": "2", "order": "2", "name": "7eleven", "address": "Минск, пр. Независимости, 48", "workingHours": "9:30 - 17:00" },
  { "id": "3", "order": "3", "name": "Carefour", "address": "Минск, ул. Ложинская, 22", "workingHours": "9:00 - 20:00" },
  { "id": "4", "order": "4", "name": "Lidl", "address": "Минск, ул. Нестерова, 49", "workingHours": "8:00 - 20:00" },
  { "id": "5", "order": "5", "name": "Crown", "address": "Минск, ул. Жилуновича, д. 41", "workingHours": "9:00 - 23:00" },
  { "id": "6", "order": "6", "name": "Super sctore", "address": "Минск, ул. Воронянского, 17", "workingHours": "8:00 - 20:00" },
  { "id": "7", "order": "7", "name": "AllInOne", "address": "Минск, ул. В. Хоружей, 31", "workingHours": "10:00 - 18:00" }
];

shops = shops.map(function(item) {
  item.products = Product.all({ shop: item.id });
  return item;
});

module.exports = {
  get: function(id) {
    return _.find(shops, function(shop){
      return shop.id == id;
    });
  },
  all: function() {
    return shops;
  },
  update: function(shop) {
    var updatedShop;
    for(var i=0, l=shops.length; i < l; i++) {
      if(shops[i].id == shop.id){
        _.assign(shops[i], shop);
        updatedShop = shops[i];
        break;
      }
    }
    return updatedShop;
  },
  create: function(shop) {
    shop.id = shops.length + 1;
    shops.push(shop)
    return shop;
  }
}
