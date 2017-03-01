var Shop = require('../models/shops');

module.exports = function(app){
  app.get('/shops', function(req, res){
    res.json(Shop.all());
  });

  app.post('/shops', function(req, res) {
    setTimeout(function(){
      res.json(Shop.create(req.body));
    }, 1000);
  });

  app.put('/shops/:id', function(req, res) {
    setTimeout(function(){
      res.json(Shop.update(req.body));
    },1000)
  });

  app.get('/shops/:id', function(req, res){
    var shopId = parseInt(req.params.id, 10);
    res.json(Shop.get(shopId) || {});
  });
};
