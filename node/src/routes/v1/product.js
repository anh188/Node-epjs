const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/ProductController')

router.get('/:id', ProductController.get)
router.post('/', ProductController.create)
router.put('/', ProductController.update)
router.delete('/:id/:name', ProductController.delete)

module.exports = router;