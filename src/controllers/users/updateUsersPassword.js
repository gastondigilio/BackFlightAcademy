const { Users } = require('../../db.js');

async function updateUsersPassword(req, res, next) {
    const { id, email, pass } = req.body;
    try {
        if (id) {
            const user = await Users.findOne({ where: { id } })
            console.log(user, "probando")
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            } else {
                const updateUser = await Users.update(
                    {
                        email: email,
                        pass: pass,
                    }, {
                    where: { id: id },
                }
                )
                if (updateUser.length > 0) {
                    return res.status(200).json({ message: 'User updated successfully'});
                } else {
                    return res.status(404).json({ message: 'User cannot be updated' });
                }
            }
        } else {
            return res.status(404).json({ message: 'Id is required' });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { updateUsersPassword };