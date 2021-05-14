const Order = require('../models').Order;
const sendSMS = require('../service/sms');


module.exports = {

    // CREATE NEW ORDER
    createOrder(req, res) {

        const { menuItemId, userPhoneNumber } = req.body;

        return Order.create({ menuItemId, userPhoneNumber })
            .then(result => {
                const response = {
                    status: 200,
                    message: "ok",
                    data: result
                }

                // SEND SMS TO NUMBER
                sendSMS(userPhoneNumber);

                res.status(200).send(response);
            })
            .catch(err => {
                res.status(401).send({ status: 400, message: err.message })
            })
    }

}