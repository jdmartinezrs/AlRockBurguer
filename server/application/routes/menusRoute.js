import express from 'express';
import MenuController from '../controllers/menuController.js';
import MenusValidator from '../validator/menusValidator.js';

const router = express.Router();
const menusValidator = new MenusValidator();
const menuController = new MenuController();


router.get('/menus',menusValidator.getAllMenusValidator(),(req, res) => menuController.getAllMenusController(req, res));


export default router;


