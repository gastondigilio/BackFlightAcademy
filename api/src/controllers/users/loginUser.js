const { json } = require('body-parser');
const {Users} = require ('../../db.js');

async function loginUser(req, res, next){
    const {userId, pass, email} = req.body ;
    try {
        if(!userId){
            
            return res.status(200).json({mensaje: "userId not Found"})
        }
        if(pass &&  email) {
            const user = await Users.findOne({ where: { id: userId} })
                if(user){
                     if(user.pass === pass && user.email === email){
                        return res.status(200).json({message: "Las credenciales coinciden"});
                    }else{
                        return res.status(400).json({message: "Las credenciales  no coinciden"});
                    } 
                    
                    
                }else{
                    return res.status(400).json({message: 'users not found'});
                }
        }else{
            return res.status(400).json({mensaje : " pass o email no funciona"})
        }
      
      
    } catch (error) {
        next(error);
    }
}

module.exports = {loginUser};