const comparePassword = require('./comparePassword')
const { Users } = require('../setting/db')

const verifyAdminOrInstruct = async (req, res, next) => {
    const { id } = req.body;
    try {
        const user = await Users.findByPk(id);
        !user && res.status(404).json({ message: 'User not found' });
        if(user.role !== 'Admin' && user.role !== 'Co-Admin' && user.role !== 'Instructor'){
            res.status(403).send({ error: 'You are not authorized to perform this action' })
        }
        next()  
    } catch(err) {
        next(err);
    }
}

module.exports = verifyAdminOrInstruct;