const { Users } = require('../setting/db.js')
const comparePassword = require('./comparePassword')

const onlyAdminOrBelongingToTheUser =  async (req, res, next) => {
    const { id, password } = req.body;
    try {
        const user = await Users.findOne({ where: { id } })
        !user && res.status(400).send({ message: 'User not found' })
        if (['Admin','Co-Admin'].includes(user.role) || await comparePassword(password, user.password)) {
            return next()
        }
        res.status(400).send({ message: 'Invalid credentials' })   
    } catch (error) {
        next(error);
    }
}

module.exports = onlyAdminOrBelongingToTheUser;