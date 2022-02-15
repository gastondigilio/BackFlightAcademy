const { Users } = require ('../../setting/db.js');
const comparePassword = require('../../middlewares/comparePassword.js');
const { generateToken } = require('../../middlewares/tokens.js');

async function signinUser(req, res, next){
    const {password, email} = req.body;
    try {
        const user = await Users.findOne({ where: { email } })
        if(user && await comparePassword(password, user.password)){
            const token = generateToken(user.id)
            res.json({token, name:user.name})
        }
        res.status(401).json({message: "Invalid credentials"})
    } catch (error) {
        next(error);
    }
}

module.exports = signinUser;