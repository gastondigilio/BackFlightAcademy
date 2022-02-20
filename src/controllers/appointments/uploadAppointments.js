const { Appointments, Users } = require('../../setting/db.js');


async function uploadAppointments (req, res, next) {
    const { userId, plane, state, date} = req.body;
    try {
        if (userId) {
            const user = await Users.findOne({ where: { id: userId } });
            if (plane && state && date && user) {
                const appointmentsUploaded = await Appointments.create({
                    plane, state, date
                })
                const appointmentsAdded = await appointmentsUploaded.setUser(user)
                if (appointmentsAdded) {
                    return res.status(200).json({ message: "appointment asigned successfully" })
                } else {
                    return res.status(400).json({ message: "the appointment was not asigned" })
                }
            } else {
                return res.status(400).json({ message: "User not found or missing parameter" })
            }
        } else {
            return res.status(404).json({ message: "UserId not found" })
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { uploadAppointments }
