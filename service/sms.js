const AfricasTalking = require('africastalking')({
    apikey: process.env.SMS_KEY,
    username: process.env.SMS_USERNAME
});


const sendSMS = async receiver => {

    return AfricasTalking.SMS.send({
        to: receiver,
        message: "",
        from: process.env.SMS_SENDER_ID
    })
}

module.exports = sendSMS;