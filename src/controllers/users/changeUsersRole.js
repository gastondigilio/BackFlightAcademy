const { Users } = require('../../setting/db');

const changeUsersRole = async (req, res, next) => {
    const { email, role } = req.body;
    try {
        const updateUser = await Users.update({ role: role }, {
            where: { email: email }
        })
        res.send({ message: "User's role updated successfully" })
    }
    catch (err) {
        next(err);
    }
}

module.exports = changeUsersRole