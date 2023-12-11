const sgMail  = require('@sendgrid/mail')

// const sendgridAPIKey = ''

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'zawmyintoo.95@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'zawmyintoo.95@gmail.com',
        subject: 'Email Cancelation',
        text: `Why did you remove your account, ${name}? Let me know if you have any issue.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}