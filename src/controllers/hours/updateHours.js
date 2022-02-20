const { Hours, Users } = require('../../setting/db.js');

async function updateHours(req, res, next) {
    const { email, totalFlightHours, totalFlights, flightHoursCurrentMonth, nextHours } = req.body;
    try {
        !email && !totalFlightHours && !totalFlights && !flightHoursCurrentMonth && !nextHours && res.status(400).json({ message: "Bad request" });
        const user = await Users.findOne({ where: { email: email }, include: Hours });
        console.log(user);
        if (user) {
            const hours = await user.Hours;
            console.log(hours);
            if (hours) {
                await hours.update({
                    totalFlightHours, totalFlights, flightHoursCurrentMonth, nextHours
                })
                return res.status(200).json({ message: "hours updated successfully" })
            } else {
                return res.status(400).json({ message: "the hours were not updated" })
            }
        } else {
            return res.status(400).json({ message: "the hours were not updated" })
        }  
    } catch (error) {
        next(error);
    }
}

module.exports = updateHours