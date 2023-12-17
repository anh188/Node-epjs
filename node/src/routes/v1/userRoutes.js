const express = require('express');
const router = express.Router();
const Usercontroller = require('../../controllers/Usercontroller')

router.get('/:id', Usercontroller.get);
router.post('/', Usercontroller.create);
router.put('/', Usercontroller.update);
router.delete('/:username/:password', Usercontroller.delete)

module.exports = router;
