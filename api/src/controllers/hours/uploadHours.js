const { Hours, Users } = require('../../db.js');


async function uploadHours(req, res, next) {
    const { id, totalFlightHours, totalFlights, flightHoursCurrentMonth, nextHours } = req.body;
    try {
        const user = await Users.findOne({where: {id: id}});
        if (totalFlightHours && totalFlights && flightHoursCurrentMonth && nextHours) {
            const hoursCreated = await Hours.create({
                totalFlightHours, totalFlights, flightHoursCurrentMonth, nextHours

            })
            const hoursAdded = await hoursCreated.setUser(user)
            if (hoursAdded) {
                return res.status(200).json({ message: "hours created successfully" })
            } else {
                return res.status(400).json({ message: "the hours were not created" })
            }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { uploadHours }