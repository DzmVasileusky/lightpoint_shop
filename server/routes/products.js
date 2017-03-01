var Product = require('../models/products')

module.exports = function(app) {
  app.get('/products', function(req, res) {
    res.json(Product.all(req.query));
  });

  app.get('/products/:id', function(req, res) {
    var productId = parseInt(req.param('id'), 10);
    res.json(Product.get(productId) || {});
  });
};
