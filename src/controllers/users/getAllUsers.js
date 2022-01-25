const {Users} = require ('../../db.js');

async function getAllUsers(req, res, next){
    try {
        const users = await Users.findAll();
        if(users){
            return res.status(200).json(users);
        }else{
            return res.status(400).json({message: 'users not found'});
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {getAllUsers};