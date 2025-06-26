const express = require('express');
const MenuController = require('../controllers/menuController');
const MenusValidator = require('../validator/menusValidator');

const router = express.Router();
const menusValidator = new MenusValidator();
const menuController = new MenuController();


router.get('/menus',menusValidator.getAllMenusValidator(),(req, res) => menuController.getAllMenusController(req, res));


module.exports = router;

