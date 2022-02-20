const { Users } = require('../../setting/db.js');

async function updateUsers(req, res, next) {
    const { id, name, lastName, document, birthday, nationality, country, province, cp, location, address } = req.body;
    try {
        const user = await Users.findByPk(id);
        user.name = name || user.name;
        user.lastName = lastName || user.lastName;
        user.document = document || user.document;
        user.birthday = birthday || user.birthday;
        user.nationality = nationality || user.nationality;
        user.country = country || user.country;
        user.province = province || user.province;
        user.cp = cp || user.cp;
        user.location = location || user.location;
        user.address = address || user.address;
        await user.save();
        res.send({
            message: 'User updated successfully',
            user: [{
                email: user.email,
                name: user.name,
                lastName: user.lastName,
                document: user.document,
                birthday: user.birthday,
                nationality: user.nationality,
                country: user.country,
                province: user.province,
                cp: user.cp,
                location: user.location,
                address: user.address
            }]
        })
    } catch (error) {
        next(error);
    }
}

module.exports = updateUsers ;