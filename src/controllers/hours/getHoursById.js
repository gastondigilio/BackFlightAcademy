const { Hours, Users } = require('../../setting/db.js');


async function getHoursById(req, res, next) {
    const { id } = req.query;
    try {
        if (!id) {
            await Hours.findAll({
                include: [{
                    model: Users,
                    as: 'user',                    
                    attributes: ['name', 'lastName', 'email', 'rol']
                }]
            }, (err, hours) => {
                err && next(err);
                hours && res.status(200).json({
                    message: 'Hours retrieved successfully',
                    hours: hours
                })
            })
        }
        await Users.findByPk( id, { include: Hours }, (err, user) => {
            console.log(err)
            err && next(err);
            user && res.status(200).json({
                message: 'User retrieved successfully',
                user: user
            })
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { getHoursById }
