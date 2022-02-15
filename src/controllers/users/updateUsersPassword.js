const { Users } = require('../../setting/db.js');
const { hashPass } = require('../../middlewares/bcrypt.js');

async function updateUsersPassword(req, res, next) {
    const { id, newPassword } = req.body;
    try {
        const updateUser = await Users.update({ password: await hashPass(newPassword) }, {
            where: { id: id }
        })
        res.send(updateUser)
    } catch (error) {
        next(error);
    }
}

module.exports = updateUsersPassword ;