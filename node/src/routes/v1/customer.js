const express = require('express');
const router = express.Router();
const CustomerController = require('../../controllers/CustomerController')

router.get('/:id', CustomerController.get)
router.post('/', CustomerController.create)
router.put('/', CustomerController.update)
router.delete('/', CustomerController.delete)

module.exports = router;