const {validationResult} = require('express-validator');
const MenusService = require('../services/menusService');

class MenuController {
    constructor() {
        this.menusService = new MenusService();
    }

    async getAllMenusController(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
            const ordered = await this.menusService.getAllMenusService();
            res.status(200).json(ordered);
        } catch (error) {
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({message: errorObj.message});
            }
      
    }
}

module.exports = MenuController;

