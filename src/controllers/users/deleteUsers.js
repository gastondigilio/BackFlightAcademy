const { Users }  = require('../../setting/db');

const deleteUsers = async ( req, res, next ) => {
    const { email } = req.body
    try{
        await Users.destroy({ where: { email } })
        res.send({ message: 'Usuario eliminado correctamente' })
    } catch(err){
        next(err)
    }
}

module.exports = deleteUsers;