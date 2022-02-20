const { Users, Hours } = require('../../setting/db.js');
const { hashPass } = require('../../middlewares/bcrypt.js');
const sendEmailVerificationMessage = require('../../middlewares/sendEmailVerificationMessage.js');

const createUsers = async (req, res, next) => {
    const { name, lastName, email, password } = req.body;
    try {
        const user = await Users.create({name, lastName, email, password: await hashPass(password)})
        const hours = await Hours.create({
            totalFlightHours:0,
            totalFlights:0,
            flightHoursCurrentMonth:0
        });
        await hours.setUser(user)
        sendEmailVerificationMessage(email)
        res.status(201).json({
            message: 'User created successfully, please verify your email for login'
        })
    }
    catch (error) {
        next(error);
    }        
}

module.exports = createUsers