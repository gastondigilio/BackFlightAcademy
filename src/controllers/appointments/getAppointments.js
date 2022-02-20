const { Appointments, Users } = require('../../setting/db.js');


async function getAppointmentsByUserId(req, res, next) {
    const { userId } = req.query;
    console.log(userId);
    try {
        if (!userId) {
            return res.status(400).json({
                message: "Bad request",
            });
        } else {
            const user = await Users.findByPk(userId, {
                include: [
                    {
                        model: Appointments,
                    },
                ],
            });
            if (user) {
                if (user.appointments.length > 0 && user.appointments[0].userId === userId) {
                    const hoursId = user.appointments[0].id
                    if (hoursId) {
                        const appointmentsObtained = user.appointments;
                        if (appointmentsObtained) {
                            return res.status(200).json(appointmentsObtained)
                        } else {
                            return res.status(404).json({ message: 'appointments cannot be obtained' })
                        }
                    } else {
                        res.status(400).json({ message: "nextJoursUser error" })
                    }
                } else {
                    return res.status(400).json({ message: "User has not appointment asigned" })
                }
            } else {
                return res.status(400).json({ message: "User not found" })
            }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { getAppointmentsByUserId }
