const { Users } = require('../../setting/db');

const changeUsersRole = async (req, res, next) => {
    const { email, role } = req.body;
    try {
        if(["Instructor", "Alumno", "Piloto", "Co-Admin", "Admin"].includes(role)){
        const updateUser = await Users.findOne({ where:{email: email} })
        if(!updateUser){
            return res.status(404).json({ message: 'Email not exist' });
        }        
        updateUser.role = role;
        updateUser.save();
        res.send({ message: "User's role updated successfully" })
        } else {
            res.status(400).send({ message: 'Invalid role' })
        }
    }
    catch (err) {
        next(err);
    }
}

module.exports = changeUsersRole