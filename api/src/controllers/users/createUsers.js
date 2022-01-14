const { Users } = require('../../db.js');

async function createUsers(req, res, next) {
    const { name, lastName, rol, email, pass } = req.body;
    try {
        if (rol === "Alumno" || rol === "Piloto" || rol === "Instructor" || rol === "InstructorAdmin" || rol === "Admin" && pass ) {
            try {
                const users = await Users.create({
                    name, lastName, rol, email, pass
                });

                if (users) {
                    console.log('users created successfully')
                    return res.status(200).json({ message: 'users created successfully' });
                } else {
                    console.log('cannot create user')
                    return res.status(400).json({ message: 'cannot create user' });
                }
            } catch (error) {
                next(error);
            }
        } else {
            console.log('rol selected is not valid o pass no enviada')
            return res.status(400).json({ message: 'rol selected is not valid o pass no enviada' })
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { createUsers };