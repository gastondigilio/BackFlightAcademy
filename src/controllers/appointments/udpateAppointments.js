const { Appointments, Users } = require('../../setting/db.js');


async function updateAppointments(req, res, next) {
    const { userId, plane, state, date } = req.body;
    try {
        if (!userId) {
            return res.status(400).json({
                message: "Bad request",
            });
        } else {
            if (plane && state && date) {
                const user = await Users.findByPk(userId, {
                    include: [
                        {
                            model: Appointments,
                        },
                    ],
                });
                if (user) {
                    // si el usuario tiene proximos turnos registrados...
                    if (user.appointments.length > 0 && user.appointments[0].userId === userId) {
                        const appointmentsId = user.appointments[0].id
                        if (appointmentsId) {
                            //obtenemos la instancia de horas del respectivo usuario para luego actualizar alguno de los estados
                            const appointmentsUser = await Appointments.findOne({ where: { id: appointmentsId } })
                            if (appointmentsUser) {
                                const appointmentsUpdate = await appointmentsUser.update({
                                    plane,
                                    state,
                                    date
                                }, {
                                    where: { id: appointmentsId }
                                })
                                if (appointmentsUpdate) {
                                    return res.status(200).json({ message: ' Appointments updated successfully' })
                                } else {
                                    return res.status(404).json({ message: ' Appointments cannot be updated' })
                                }
                            } else {
                                res.status(400).json({ message: "Appointments error" })
                            }
                        } else {
                            return res.status(400).json({ message: "AppointmentsId error" })
                        }
                    } else {
                        return res.status(400).json({ message: "User has not appointment asign" })
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

module.exports = { updateAppointments }
