const {Users} = require ('../../setting/db.js');

async function getAllUsers(req, res, next){
    try {
        const users = await Users.findAll();
        users && res.status(200).json(users);
        return res.status(404).json({
            message: 'users not found',
            users:[]
        });
    } catch (error) {
        next(error);
    }
}

module.exports = getAllUsers;