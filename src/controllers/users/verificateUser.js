const {Users} = require ('../../setting/db.js');
const { generateToken } = require('../../middlewares/tokens');

const verificateUser = async (req, res, next) => {
    const { email } = req.query;
    console.log(email)
    try {   
        const userExist = await Users.findOne({ where: { email: email}})     
        !userExist && res.status(400).json({message: 'User not exist'});
        await Users.update({ isVerified: true }, {
            where: {
                email: email
            }
          })
        res.send({
            message: 'User verified successfully'
            });
    }
    catch(error) {
        next(error);
    }
}
module.exports = verificateUser;