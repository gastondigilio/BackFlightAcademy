const { Users } = require('../setting/db.js')
const comparePassword = require('./comparePassword')

const onlyAdminOrBelongingToTheUser =  async (req, res, next) => {
    const { id, password } = req.body;
    try {
        const user = await Users.findOne({ where: { id } })
        !user && res.status(400).send({ message: 'User not found' })
        if (user.role.includes("Co-Admin") || user.role.includes("Admin") || await comparePassword(password, user.password)) {             
            next()
        }         
    } catch (error) {
        next(error);
    }
}

module.exports = onlyAdminOrBelongingToTheUser;