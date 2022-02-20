const nodemailer = require('nodemailer')
require('dotenv').config()

const sendEmailVerificationMessage = (email) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    })
    const link = process.env.EMAIL_VERIFICATION_LINK + email
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify your email',
        html: `<h1>Welcome to BackFlight Academy</h1>
        <p>Please click on the link below to verify your email</p>
        <a href="${link}"> Verify </a>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        error ? console.log({Error: error}) : console.log('Email sent: ' + info.response);
    });
}

module.exports = sendEmailVerificationMessage