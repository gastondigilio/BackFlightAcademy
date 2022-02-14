const optionSession = {
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}

module.exports = optionSession;