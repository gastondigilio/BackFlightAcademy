const { NextHours, Users } = require('../../db.js');


async function getNextHoursByUserId(req, res, next) {
    const { userId } = req.body;
    try {
        if (!userId) {
            return res.status(400).json({
                message: "Bad request",
            });
        } else {
            const user = await Users.findByPk(userId, {
                include: [
                    {
                        model: NextHours,
                    },
                ],
            });
            if (user) {
                if (user.nextHours.length > 0 && user.nextHours[0].userId === userId) {
                    const hoursId = user.nextHours[0].id
                    if (hoursId) {
                        const nextHoursObtained = user.nextHours[0];
                        if (nextHoursObtained) {
                            return res.status(200).json(nextHoursObtained)
                        } else {
                            return res.status(404).json({ message: 'nextHours cannot be obtained' })
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

module.exports = { getNextHoursByUserId }
