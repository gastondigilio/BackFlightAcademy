const bcrypt = require('bcrypt');

const comparePassword = async (password, passwordHash) => {
    return await bcrypt.compare(password, passwordHash);
}

module.exports = comparePassword;