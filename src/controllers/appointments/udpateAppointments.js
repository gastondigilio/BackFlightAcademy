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
                        const appointments = user.appointments[0].id
                        if (nextHoursId) {
                            //obtenemos la instancia de horas del respectivo usuario para luego actualizar alguno de los estados
                            const nextHoursUser = await NextHours.findOne({ where: { id: nextHoursId } })
                            if (nextHoursUser) {
                                const nextHoursUpdate = await NextHours.update({
                                    plane: plane,
                                    state: state,
                                    nextHours: nextHours
                                }, {
                                    where: { id: nextHoursId }
                                })
                                if (nextHoursUpdate) {
                                    return res.status(200).json({ message: 'NextHours updated successfully' })
                                } else {
                                    return res.status(404).json({ message: 'NextHours cannot be updated' })
                                }
                            } else {
                                res.status(400).json({ message: "NextHoursUser error" })
                            }
                        } else {
                            return res.status(400).json({ message: "NextHoursId error" })
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

module.exports = { updateNextHours }
