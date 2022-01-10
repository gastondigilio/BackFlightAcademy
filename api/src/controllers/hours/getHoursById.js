const { Hours, Users } = require('../../db.js');


async function getHoursById(req, res, next) {
    const { id } = req.body;
    try {
        if (!id) {
            return res.status(400).json({
                message: "Bad request",
            });
        } else {
            const user = await Users.findByPk(id, {
                include: [
                    {
                        model: Hours,
                    },
                ],
            });
            if (user) {
                return res.status(200).send(user);
            } else {
                return res.status(400).json({ message: "User not found"})
            }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { getHoursById }
