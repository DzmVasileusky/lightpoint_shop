var _ = require('lodash');

var products = [
  { "id": 1, "name": "milk", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 2, 3, 6] },
  { "id": 2, "name": "chicken egg", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 2, 3, 6] },
  { "id": 3, "name": "pork", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2, 4, 5, 7] },
  { "id": 4, "name": "beef", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2, 4, 5, 7] },
  { "id": 5, "name": "lamb", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2, 3] },
  { "id": 6, "name": "chicken", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 2, 3, 6] },
  { "id": 7, "name": "duck", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 4] },
  { "id": 8, "name": "rabbit", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [5] },
  { "id": 9, "name": "turkey", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 2, 3, 6] },
  { "id": 10, "name": "dorada", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1] },
  { "id": 11, "name": "seabass", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [5] },
  { "id": 12, "name": "tuna", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [3] },
  { "id": 13, "name": "bass", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 4] },
  { "id": 14, "name": "lemonema", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [4] },
  { "id": 15, "name": "scabard", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2, 4, 5, 7] },
  { "id": 16, "name": "salmon", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [4] },
  { "id": 17, "name": "trout", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2, 4, 5, 7] },
  { "id": 18, "name": "mussels", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [5] },
  { "id": 19, "name": "sand lobster", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 2, 3, 6] },
  { "id": 20, "name": "river lobster", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [6] },
  { "id": 21, "name": "orange", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [6] },
  { "id": 22, "name": "potato", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 4] },
  { "id": 23, "name": "cabbage", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [3] },
  { "id": 24, "name": "liver", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 2, 3, 6] },
  { "id": 25, "name": "pig ears", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 2, 3, 6] },
  { "id": 26, "name": "pig ribs", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1] },
  { "id": 27, "name": "shells", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2, 3] },
  { "id": 28, "name": "duck egg", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2] },
  { "id": 29, "name": "turkey egg", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2] },
  { "id": 31, "name": "kefir", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 4] },
  { "id": 32, "name": "kurd", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [5] },
  { "id": 33, "name": "mascarpone", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 2, 3, 6] },
  { "id": 34, "name": "radamer", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 4] },
  { "id": 35, "name": "mozarella", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2, 3] },
  { "id": 36, "name": "salad", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [7] },
  { "id": 37, "name": "carrot", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 2, 3, 6] },
  { "id": 38, "name": "apple", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2, 4, 5, 7] },
  { "id": 39, "name": "pear", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1] },
  { "id": 40, "name": "plum", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2, 3] },
  { "id": 41, "name": "salary", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [2, 4, 5, 7] },
  { "id": 42, "name": "tomato", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [1, 4] },
  { "id": 43, "name": "cucubmer", "description": "Prefer using directives via tag name and attributes over comment and class names. Doing so generally makes it easier to determine what directives a given element matches.", "shops": [5] }
];

module.exports = {
  get: function(id) {
    return _.find(products, function(product){
      return product.id === id;
    });
  },
  all: function(params) {
    var selectedProducts = products, log;

    if (params.shop) {
      selectedProducts = products.filter(function(value) {
        return value.shops && value.shops.filter(function(id) {
          return id == params.shop;
        }).length;
      });
    }

    return selectedProducts;
  }
}
