const Menu = require("../models").Menu;


module.exports = {

    // CREATE MENU
    createMenu(req, res) {

        const { name, price } = req.body

        return Menu.createOrFind({ where: { name }, fields: { name, price } })
            .then(result => {
                const response = {
                    status: 201,
                    message: "ok",
                    data: { ...result }
                }
                res.status(201).send(response)
            })
            .catch(err => {
                throw new error()
            })

    },

}