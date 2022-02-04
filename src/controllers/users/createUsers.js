const { Users, Hours } = require('../../setting/db.js');

async function createUsers(req, res, next) {
    const { name, lastName, email, pass } = req.body;
    if ( name && lastName && email && pass ) {
        try {
                const user = await Users.create({ name, lastName, email,pass })
                const hours = await Hours.create({
                        totalFlightHours:0,
                        totalFlights:0,
                        flightHoursCurrentMonth:0
                    });
                user && hours && await hours.setUser(user)
            }
            catch (error) {
                next(error);
            }
        }
    else {
            console.log('Incorrect params');
            return res.status(400).json({ message: 'Incorrect params' })
        }
}

module.exports = { createUsers };