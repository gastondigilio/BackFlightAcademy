const { Users } = require('../../setting/db.js');
const { hashPass } = require('../../middlewares/bcrypt.js');

async function updateUsersPassword(req, res, next) {
    const { id, password } = req.body;
    try {
        const updateUser = await Users.update({ password: await hashPass(password) }, {
            where: { id: id }
        })
        res.send(updateUser)
    } catch (error) {
        next(error);
    }
}

module.exports = updateUsersPassword ;