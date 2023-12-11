const express = require('express');
const router = express.Router();
const Usercontroller = require('../../controllers/Usercontroller')
// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     console.log(id)
//     res.status(200).json({msg:`Get ID ${id}`})
// })

router.get('/test', (req, res) => {
    // console.log('a');
    // let page = req.query.page;
    // let sort = req.query.sort;
    
    const{page,sort} = req.query;

    console.log(page,sort);

    res.status(400).json({msg:`Get query String`})
})

// router.post('/', (req,res) => {
//     const{username, password} = req.body;

//     res.status(200).json({
//         username,
//         password    
//     })

// })

router.get('/:id', Usercontroller.get);
router.post('/', Usercontroller.create);
router.put('/', Usercontroller.update);
router.delete('/:username/:password', Usercontroller.delete)

module.exports = router;
