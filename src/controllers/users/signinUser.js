const { Users } = require ('../../setting/db.js');
const comparePassword = require('../../middlewares/comparePassword.js');
const { generateToken } = require('../../middlewares/tokens.js');

async function signinUser(req, res, next){
    const {password, email} = req.body;
    try {
        const user = await Users.findOne({ where: { email } })
        if(!user || !await comparePassword(password, user.password)){
            return res.status(401).json({message: "Invalid credentials", user:[]})
        } 
        if(!user.isVerified){
            return res.status(401).json({message: 'User not verified, please check your email and try again', user: []});
        }
        const token = generateToken(user.id)
        res.send({
            message: 'User signed in',
            token: token,
            user: [{
                email: user.email,
                name: user.name,
                lastName: user.lastName,
                role: user.role,
                document: user.document,
                birthday: user.birthday,
                nationality: user.nationality,
                country: user.country,
                province: user.province,
                cp: user.cp,
                location: user.location,
                address: user.address,
                subjectsApproved: user.subjectsApproved,
            }]
        })
       
    } catch (error) {
        next(error);
    }
}

module.exports = signinUser;