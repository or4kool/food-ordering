const Menu = require("../models").Menu;


module.exports = {

    // CREATE MENU
    createMenu(req, res) {

        const { name, price } = req.body

        return Menu.findOrCreate({ where: { name }, defaults: { name, price } })
            .then(result => {
                if (!result[1]) {
                    return res.status(400).send({ status: 400, message: `${name} already exists` })
                }

                const response = {
                    status: 201,
                    message: "ok",
                    data: result[0]
                }
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send({ status: 400, message: err.message })
            })
    },

    // GET MENU
    getMenu(req, res) {
        return Menu.findAll()
            .then(result => {
                const response = {
                    status: 200,
                    message: "ok",
                    data: [...result]
                }

                res.status(200).send(response)
            })
            .catch(err => {
                res.status(400).send({ status: 400, message: err.message })
            })
    },

}