const { jwt } = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (id) => {
    return jwt.sign(id, process.env.SECRET_KEY, {
        expiresIn: '1d'
    });
}

const verifyToken = (token) => {
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    return id
}

module.exports = {
    generateToken,
    verifyToken
}