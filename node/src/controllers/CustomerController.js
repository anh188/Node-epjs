class CustomerController {
    create= (req, res, next) =>{
        try{
            abc();
            const {custom_id, custom_name} = req.body;
            res.status(200).json({msg:` Create success`,
                custom_id,
                custom_name
            }) 
        }catch (error){
            throw error;
        }
    } 

    get= (req,res,next) =>{
        try{
            const {custom_id, custom_name} = req.body;
            res.status(200).json({msg:` ID: ${custom_id}, Name: ${custom_name}`})
            
        }catch(error){
            throw error;
        }
    }

    update = (req, res, next) => {
        try{
            const {custom_id, custom_name} = req.body;
            res.status(200).json({msg:` Update success`,
                custom_id,
                custom_name
            }) 
        }catch (error){
            throw error;
        }
    }

    delete = (req, res, next) => {
        try{
            let custom_id = req.params.custom_id;
            let custom_name = req.params.custom_name;
            res.status(200).json({msg:` Delete success ID: ${custom_id}, Name: ${custom_name}`}) 
        }catch (error){
            throw error;
        }
    }
}

module.exports = new CustomerController;