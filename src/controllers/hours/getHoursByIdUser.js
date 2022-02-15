const { Hours, Users } = require('../../setting/db.js');

async function getHoursByIdUser(req, res, next) {
    const { id } = req.body;
    console.log(id);
    try {
        const user = await Users.findByPk(id)
        if (['Admin','Instructor','Co-Admin'].includes(user.role)) {
            const hours = await Hours.findAll({
                include: [{
                    model: Users,
                    as: 'user',                    
                    attributes: ['name', 'lastName', 'email', 'role']
                }]
            });
            hours && res.status(200).json({ message: 'hours', hours });
            !hours && res.status(404).json({
                message: 'hours not found',
                hours: []
            });
        }
        const hours = await Hours.findOne( {where: { userId: id }} )
        hours && res.status(200).json({ message: 'hours', hours });
        !hours && res.status(404).json({
            message: 'user not found',
            hours: []
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getHoursByIdUser
