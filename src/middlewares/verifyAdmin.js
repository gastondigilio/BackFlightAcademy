const comparePassword = require('./comparePassword')
const { verifyToken } = require('./tokens')
const { Users } = require('../setting/db')

const verifyAdmin = async (req, res, next) => {
    const { password, token } = req.body;
    try {
        const _id = verifyToken(token);
        const user = await Users.findByPk(_id);
        user.rol === 'Admin' && await comparePassword(password, user.password) ?
        next() :
        res.status(403).send({ error: 'You are not authorized to perform this action' });
    } catch(err) {
        next(err);
    }
}

module.exports = verifyAdmin;