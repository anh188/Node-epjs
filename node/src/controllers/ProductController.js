class ProductController {
    create= (req, res, next) =>{
        try{
            const {product_id, product_name} = req.body;
            res.status(200).json({msg:` Create success`,
                product_id,
                product_name
            }) 
        }catch (error){
            throw error;
        }
    } 

    get= (req,res,next) =>{
        try{
            const {product_id, product_name} = req.body;
            res.status(200).json({msg:` ID: ${product_id}, Name: ${product_name}`})
            
        }catch(error){
            throw error;
        }
    }

    update = (req, res, next) => {
        try{
            const {product_id, product_name} = req.body;
            res.status(200).json({msg:` Update success`,
                product_id,
                product_name
            }) 
        }catch (error){
            throw error;
        }
    }

    delete = (req, res, next) => {
        try{
            let product_id = req.params.product_id;
            let product_name = req.params.product_name;
            res.status(200).json({msg:` Delete success ID: ${product_id}, Name: ${product_name}`}) 
        }catch (error){
            throw error;
        }
    }
}

module.exports = new ProductController;