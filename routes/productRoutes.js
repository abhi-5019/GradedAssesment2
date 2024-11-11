
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
router.post('/add', productController.addProduct);
router.put('/update-price/:id', productController.updateProductPrice);
router.get('/available', productController.getAvailableProducts);
router.get('/category/:category', productController.getProductsByCategory);

module.exports = router;
