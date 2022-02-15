const { Hours, Users } = require('../../setting/db.js');

async function getHoursByIdUser(req, res, next) {
    const { id } = req.body;
    try {
        if (!id) {
            const hours = await Hours.findAll({
                include: [{
                    model: Users,
                    as: 'user',                    
                    attributes: ['name', 'lastName', 'email', 'role']
                }]})
            hours && res.status(200).json(hours);
            !hours && res.status(404).json({
                message: 'hours not found',
                hours: []
            });
        }
        const user = await Hours.findOne( {where: { userId: id }} )
        user && res.status(200).json(user);
        !user && res.status(404).json({
            message: 'user not found',
            user: []
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getHoursByIdUser
