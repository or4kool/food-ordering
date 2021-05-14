const express = require('express');
const router = express.Router();
const Menu = require('../controllers').menu


// CREATE MENU ROUTE
router.post("/menu", Menu.createMenu);

// GET ALL MENU ROUTE
router.get("/menu", Menu.getMenu)


module.exports = router;