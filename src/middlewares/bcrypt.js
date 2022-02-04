const bcrypt = require('bcrypt')

const hashPass = (pass) => {
 return bcrypt.hash(pass, 10)
}

const comparePass = (pass1, pass2) => {
    return bcrypt.compare(pass1, pass2)
}

module.exports = {
    hashPass,
    comparePass
}