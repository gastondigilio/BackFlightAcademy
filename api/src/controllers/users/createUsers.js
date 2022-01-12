const { Users } = require('../../db.js');

async function createUsers(req, res, next) {
    const { name, lastName, rol, document, birthday, nationality, country, province, cp, location, address, email } = req.body;
    try {
        if (rol === "Alumno" || rol === "Piloto" || rol === "Instructor" || rol === "InstructorAdmin" || rol === "Admin") {
            try {
                const users = await Users.create({
                    name, lastName, rol, document, birthday, nationality, country, province, cp, location, address, email
                });

                if (users) {
                    return res.status(200).json({ message: 'users created successfully' });
                } else {
                    return res.status(400).json({ message: 'cannot create user' });
                }
            } catch (error) {
                next(error);
            }
        } else {
            return res.status(400).json({ message: 'rol selected is not valid' })
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { createUsers };