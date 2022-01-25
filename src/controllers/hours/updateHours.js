const { Hours, Users } = require('../../db.js');


async function updateHours(req, res, next) {
    const { userId, totalFlightHours, totalFlights, flightHoursCurrentMonth, nextHours } = req.body;
    try {
        if (!userId) {
            return res.status(400).json({
                message: "Bad request",
            });
        } else {
            if (totalFlightHours && totalFlights && flightHoursCurrentMonth && nextHours) {
                const user = await Users.findByPk(userId, {
                    include: [
                        {
                            model: Hours,
                        },
                    ],
                });
                if (user) {
                    // si el usuario tiene horas registradas...
                    if (user.hours.length > 0 && user.hours[0].userId === userId) {
                        const hoursId = user.hours[0].id
                        console.log(hoursId);
                        if (hoursId) {
                            //obtenemos la instancia de horas del respectivo usuario para luego actualizar alguno de los estados
                            const hoursUser = await Hours.findOne({ where: { id: hoursId } })
                            if (hoursUser) {
                                const hoursUpdate = await Hours.update({
                                    totalFlightHours: totalFlightHours,
                                    totalFlights: totalFlights,
                                    flightHoursCurrentMonth: flightHoursCurrentMonth,
                                    nextHours: nextHours
                                }, {
                                    where: { id: hoursId }
                                })
                                if(hoursUpdate){
                                    return res.status(200).json({message: 'Hours updated successfully'})
                                }else{
                                    return res.status(404).json({message: 'Hours cannot be updated'})
                                }
                            } else {
                                res.status(400).json({ message: "hoursUser error" })
                            }
                        } else {
                            return res.status(400).json({ message: "hoursId error" })
                        }
                    } else {
                        return res.status(400).json({ message: "User has not hours registry" })
                    }
                } else {
                    return res.status(400).json({ message: "User not found" })
                }
            } else {
                return res.status(400).json({ message: "Missing data" });
            }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { updateHours }