const { Users } = require('../../setting/db.js');
const { hashPass } = require('../../middlewares/bcrypt.js');

async function updateUsersPassword(req, res, next) {
    const { id, newPassword } = req.body;
    try {
        const user = await Users.update({ password: await hashPass(newPassword) }, {
            where: { id: id }
        })
        res.send({
            message: 'Password updated'
        })
    } catch (error) {
        next(error);
    }
}

module.exports = updateUsersPassword ;