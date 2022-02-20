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
                // return res.status(200).json(user)
                if (user.appointments.length > 0) {
                    const appointmentsUploaded = user.appointments
                    if (appointmentsUploaded) {
                        return res.status(200).json(appointmentsUploaded)
                    } else {
                        res.status(400).json({ message: "This users has not appointments" })
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
