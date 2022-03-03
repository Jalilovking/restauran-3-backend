const model = require('./model')
require('dotenv').config()
const nodemailer = require('nodemailer')

module.exports = {
    Order: async(req, res) => {
        try {

            const { name, address, email } = req.body

            console.log(name, address, email)

            let transporter = nodemailer.createTransport({
                port: 587,
                service: 'gmail',
                auth: {
                  user: process.env.E_USERNAME, // generated ethereal user
                  pass: process.env.E_PASSWORD, // generated ethereal password
                }
            })
        
            console.log(process.env.E_USERNAME)

            let info = await transporter.sendMail({
                from: process.env.E_USERNAME, // sender address
                to: email, // list of receivers
                subject: `${name} ✔️`, // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            })

            console.log("Message sent: %s", info.messageId);

            const mailSend = await model.order(name, address, email)

            res.send('ok')

        } catch (error) {
            console.log(error)
        }
    }
}