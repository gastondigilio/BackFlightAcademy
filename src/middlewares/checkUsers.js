const { Users } = require('../setting/db.js')

const checkUsers =  async (req, res, next) => {
    const { id } = req.body;
    try {
        const user = await Users.findOne({ where: { id } })
        user ? next() : res.status(400).send({ message: 'User not found' })
    } catch (error) {
        next(error);
    }
}

module.exports = checkUsers;