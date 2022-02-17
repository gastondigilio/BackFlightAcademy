const {Users} = require ('../../setting/db.js');
const { generateToken } = require('../../middlewares/tokens');

const verificateUser = async (req, res, next) => {
    const { email } = req.body;
    try {   
        const userExist = await Users.findOne({ where: {email}})     
        !userExist && res.status(400).json({message: 'User not exist'});
        userExist.isVerified = true 
        await userExist.save()
        res.send({message: 'User verified, please login'})
    }
    catch(error) {
        next(error);
    }
}
module.exports = verificateUser;