const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (id) => {
    try {
        return jwt.sign({id: id}, process.env.SECRET_KEY,{ expiresIn: 60*60*24 });         
    } catch (error) {
        throw error;
    }
}

const verifyToken = ( req, res, next) => {
    const { token } = req.body
    try {
        const { id } = jwt.verify(token, process.env.SECRET_KEY);
        !id && res.status(401).json({ message: 'Invalid token' });
        req.body.id = id;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    generateToken,
    verifyToken
}