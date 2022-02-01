const { Users, Hours } = require('../../setting/db.js');

async function createUsers(req, res, next) {
    const { name, lastName, rol, email, pass } = req.body;
    try {
        if (rol === "Alumno" || rol === "Piloto" || rol === "Instructor" || rol === "InstructorAdmin" || rol === "Admin" && pass) {
            try {
                const users = await Users.create({
                    name, lastName, rol, email, pass
                });

                if (users) {
                    console.log('users created successfully')
                    const user = await Users.findOne({ where: { id: users.id } });
                    const totalFlightHours = 0;
                    const totalFlights = 0;
                    const flightHoursCurrentMonth = 0;
                    if (totalFlightHours === 0 && totalFlights === 0 && flightHoursCurrentMonth === 0 ) {
                        const hoursCreated = await Hours.create({
                            totalFlightHours, totalFlights, flightHoursCurrentMonth
                        })
                        const hoursAdded = await hoursCreated.setUser(user)
                        if (hoursAdded) {
                            return res.status(200).json({ message: "user and hours created successfully" })
                        } else {
                            return res.status(400).json({ message: "the user and hours were not created" })
                        }
                    }
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