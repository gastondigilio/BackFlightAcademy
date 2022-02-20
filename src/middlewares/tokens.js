const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (id) => {
    try {
        return jwt.sign({id: id}, process.env.SECRET_KEY,{ expiresIn: 60*60*24 });         
    } catch (error) {
        throw error;
    }
}

const verifyTokenAndTransformToId = ( req, res, next) => {
    const Baerer = req.headers['x-access-token'] || req.headers['authorization'];
    const token = Baerer.split(' ')[1];
    try {
        const { id } = jwt.verify(token, process.env.SECRET_KEY);
        req.body.id = id;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Invalid token, please try again' });
    }
}

module.exports = {
    generateToken,
    verifyTokenAndTransformToId
}