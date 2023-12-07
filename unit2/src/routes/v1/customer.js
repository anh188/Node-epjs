const express = require('express');
const router = express.Router();

//GET

    // //param
// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     console.log(id)
//     res.status(200).json({msg:`Get ID ${id}`})
// })

    //query string
router.get('/test', (req, res) =>{
    const{username,password} = req.query;
    console.log(username,password);
    res.status(200).json({msg:`Get query String username:${username}, password:${password}`})
})

//POST
router.post('/', (req,res) => {
    const{username, password} = req.body;
    res.status(200).json({
        username,
        password    
    })

})

//PUT
router.put('/',(req,res)=>{
    const{username, password} =req.body;
    res.status(200).json({msg:
        username, 
        password
    })
})

//DELETE
router.delete('/:username/:password',(req,res)=>{
    let username = req.params.username;
    let password = req.params.password;
    res.status(200).json({msg:`delete success customer ${username}`})
})



module.exports = router;