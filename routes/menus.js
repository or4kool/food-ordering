const express = require('express');
const router = express.Router();
const Menu = require('../controllers').menu


// CREATE MENU
router.post("/menu", Menu.createMenu);