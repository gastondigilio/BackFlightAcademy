const { Hours, Users } = require('../../setting/db.js');


async function getHoursById(req, res, next) {
    const { id } = req.query;
    try {
        if (!id) {
            console.log("if linea 8 NO HAY ID")
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
                console.log("if linea 21")
                if(user.hours[0]){
                    console.log("linea 23")
                    return res.status(200).send(user.hours);
                }else{
                    console.log("else linea 26")
                    return res.status(400).json({message: "This user has not hours uploaded"})
                }
            } else {
                console.log("else linea 30")
                return res.status(400).json({ message: "User not found"})
            }
        }
    } catch (error) {
        next(error);
    }
}

module.exports = { getHoursById }
