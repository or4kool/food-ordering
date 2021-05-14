require('dotenv').config()

const AfricasTalking = require('africastalking')({
    apiKey: process.env.SMS_KEY,
    username: process.env.SMS_USERNAME
});


// SEND SMS
const sendSMS = async receiver => {
    let smshandler
    try {
        smshandler = AfricasTalking.SMS.send({
            to: receiver,
            message: "",
            from: process.env.SMS_SENDER_ID
        })

    } catch (error) {
        throw new Error({ status: 400, message: error.message })
    }

    return smshandler;

}

module.exports = sendSMS;