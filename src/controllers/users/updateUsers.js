const { Users } = require('../../setting/db.js');

async function updateUsers(req, res, next) {
    const { id, name, lastName, document, birthday, nationality, country, province, cp, location, address } = req.body;
    try {
        const updateUser = await Users.update({ name, lastName, document, birthday, nationality, country, province, cp, location, address }, {
            where: { id: id }
        })
        res.send(updateUser)
    } catch (error) {
        next(error);
    }
}

module.exports = updateUsers ;