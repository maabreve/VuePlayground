const express                = require('express');
const router                 = express.Router();
const productController      = require('../controllers/product')
const manufacturerController = require('../controllers/manufacturer')

router.get('/manufacturers', manufacturerController.all);
router.get('/products', productController.all);
router.get('/products/:id', productController.byId);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
