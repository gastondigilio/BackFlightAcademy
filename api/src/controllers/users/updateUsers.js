const { Users } = require('../../db.js');

async function updateUsers(req, res, next) {
    const { id, name, lastName, rol, document, birthday, nationality, country, province, cp, location, address } = req.body;
    try {
        if (id) {
            const user = await Users.findOne({ where: { id } })
            console.log(user, "probando")
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            } else {
                const updateUser = await Users.update(
                    {
                        name: name,
                        lastName: lastName,
                        rol: rol,
                        document: document,
                        birthday: birthday,
                        nationality: nationality,
                        country: country,
                        province: province,
                        cp: cp,
                        location: location,
                        address: address
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

module.exports = { updateUsers };