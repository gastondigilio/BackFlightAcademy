const { Hours, Users } = require('../../setting/db.js');

async function uploadHours(req, res, next) {
    const { id, totalFlightHours, totalFlights, flightHoursCurrentMonth } = req.body;
    try {
        if (id) {

            const user = await Users.findOne({ where: { id: id } });
            if (totalFlightHours && totalFlights && flightHoursCurrentMonth) {
                const hoursCreated = await Hours.create({
                    totalFlightHours, totalFlights, flightHoursCurrentMonth
                })
                if (user) {
                    const hoursAdded = await hoursCreated.setUser(user)
                    if (hoursAdded) {
                        return res.status(200).json({ message: "hours created successfully" })
                    } else {
                        return res.status(400).json({ message: "the hours were not created" })
                    }
                } else {
                    return res.status(400).json({ message: "User not found" })
                }
            } else {
                return res.status(400).json({ message: "A parameter is missing" })
            }
        }else{
            return res.status(400).json({ message: "The ID is required to finish the task"})
        }
    } catch (error) {
        next(error);
    }
}
module.exports = uploadHours