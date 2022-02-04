const { Users, Hours } = require('../../setting/db.js');

const createUsers = async (req, res, next) => {
    const { name, lastName, email, pass } = req.body;
    if ( name && lastName && email && pass ) {
        try {
                const user = await Users.create({ name, lastName, email,pass })
                console.log(user)
                const hours = await Hours.create({
                        totalFlightHours:0,
                        totalFlights:0,
                        flightHoursCurrentMonth:0
                    });
                    console.log(hours)
                user && hours && await hours.setUser(user)
                res.status(201).json({
                    message: 'User created successfully',
                    user: user,
                    hours: hours
                })
            }
            catch (error) {
                next(error);
            }
        }
    else {
            console.log('Error: Problem with the data',
            { name,lastName:lastName, email, pass });
            return res.status(400).json({
                message: 'Problem with the data',
                data: { name, lastName:lastName, email, pass }
            })
        }
}

module.exports = {
    createUsers
};