class UserController{
    create=(req, res, next) =>{
        try{
            a();
            const{username, password} = req.body;
            res.status(200).json({
                username,
                password
            })
        } catch (error){
            throw error;
        }
    }

    get=(req, res, next) =>{
        try{
            const{username, password}=req.body;
            console.log(`Create`)
            res.status(200).json({
                username,
                password
             });
        } catch (error){
            throw error;
        }
    }

    update =(req, res, next)=>{
        try{
            const{username, password}=req.body
            res.status(200).json({
                username,password
            })
        } catch(error){
            throw error;
        }
    }
    
    delete = (req, res,next) =>{
        try{
            const{username}=req.body
            res.status(200).json({msg: `delete user: ${username}`})
        } catch(error){
            throw error;
        }
    }

    //creat =>POST
    //update => PUT
    //delete => DELETE
    //get => GET
}

module.exports =new UserController();