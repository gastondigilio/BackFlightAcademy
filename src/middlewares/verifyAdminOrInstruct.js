const comparePassword = require('./comparePassword')
const { Users } = require('../setting/db')

const verifyAdminOrInstruct = async (req, res, next) => {
    const { id } = req.body;
    try {
        const user = await Users.findByPk(id);
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        if(!["Instructor", "Co-Admin", "Admin"].includes(user.role)){
            return res.status(403).send({
                error: 'You are not authorized to perform this action'
            })
        }
        next()  
    } catch(err) {
        next(err);
    }
}

module.exports = verifyAdminOrInstruct;