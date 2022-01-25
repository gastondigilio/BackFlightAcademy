
const {Users} = require ('../../db.js');

async function loginUser(req, res, next){
    const {pass, email} = req.body ;
    try {
        if(!email){
            
            return res.status(400).json({message: "email not Found"})
        }else {
            if(pass &&  email) {
                const user = await Users.findOne({ where: { email: email} })
                    if(user){
                         if(user.pass === pass && user.email === email){
                             console.log(user.pass, pass, user.email, email)
                            return res.status(200).send(user);
                        }else{
                            return res.status(400).json({message: "Las credenciales  no coinciden"});
                        } 
                        
                        
                    }else{
                        return res.status(400).json({message: 'users not found'});
                    }
            }else{
                return res.status(400).json({message : " pass o email no funciona"})
            }
          
        }
       
      
    } catch (error) {
        next(error);
    }
}

module.exports = {loginUser};