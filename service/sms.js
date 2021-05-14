require('dotenv').config()

const AfricasTalking = require('africastalking')({
    apiKey: process.env.SMS_KEY,
    username: process.env.SMS_USERNAME
});


// SEND SMS
const sendSMS = async receiver => {
    return AfricasTalking.SMS.send({
        to: receiver,
        message: "",
        from: process.env.SMS_SENDER_ID
    })
}

module.exports = sendSMS;