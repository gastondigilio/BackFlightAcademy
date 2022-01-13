const { NextHours, Users } = require('../../db.js');


async function uploadNextHours(req, res, next) {
    const { userId, plane, state, nextHours } = req.body;
    try {
        if (userId) {
            const user = await Users.findOne({ where: { id: userId } });
            if (plane && state && nextHours && user) {
                const nextHoursUploaded = await NextHours.create({
                    plane, state, nextHours
                })
                const nextHoursAdded = await nextHoursUploaded.setUser(user)
                if (nextHoursAdded) {
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

module.exports = { uploadNextHours }