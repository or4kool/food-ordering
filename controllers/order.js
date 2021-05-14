const Order = require('../models').Order;



module.exports = {

    // CREATE NEW ORDER
    createOrder(req, res) {

        const { menuItemId, userPhoneNumber } = req.body

        return Order.create({ menuItemId, userPhoneNumber })
            .then(result => {
                const response = {
                    status: 200,
                    message: "ok",
                    data: [...result]
                }

                res.status(200).send(response)
            })
    }

}