const express = require('express');
const router = express.Router();

//GET

    //param
router.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id)
    res.status(200).json({msg:`Get ID ${id}`})
})

//     //query string
// router.get('/test', (req, res) =>{
//     const{id,nameproduct} = req.query;
//     console.log(id,nameproduct);
//     res.status(200).json({msg:`Get query String id:${id}, nameproduct:${nameproduct}`})
// })

//POST
router.post('/', (req,res) => {
    const{id, nameproduct} = req.body;
    res.status(200).json({
        id,
        nameproduct    
    })

})

//PUT
router.put('/',(req,res)=>{
    const{id, nameproduct} =req.body;
    res.status(200).json({msg:
        id, 
        nameproduct
    })
})

//DELETE
router.delete('/:id/:nameproduct',(req,res)=>{
    let id = req.params.id;
    let nameproduct = req.params.nameproduct;
    res.status(200).json({msg:`delete success customer ${id}`})
})

module.exports = router;