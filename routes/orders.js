const express = require('express');
const router = express.Router();

const Order = require('../controllers').order

// POST NEW ORDER
router.post("/order", Order.createOrder);


module.exports = router;