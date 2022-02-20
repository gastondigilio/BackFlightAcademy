const { Users }  = require('../../setting/db');

const deleteUsers = async ( req, res, next ) => {
    const { id, email } = req.body
    try{
        const user = await Users.findOne({ where: { id: id } })
        if(['Admin','Co-Admin'].includes(user.role)){
            await Users.destroy({ where: { email } })
        }
        else{
            await Users.destroy({ where: { id } })
        }
        res.send({ message: 'Usuario eliminado correctamente' })
    } catch(err){
        next(err)
    }
}

module.exports = deleteUsers;