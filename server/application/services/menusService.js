const MenuRepository = require('../domain/repositories/menuRepository');

class MenusService {
    constructor() {
        this.menusService = new MenuRepository();
    }

    async getAllMenusService() {
        const menus = await this.menusService.getAllMenusRepository();
        if(!menus){
            throw new Error(JSON.stringify({ status: 404, message: 'Menus not found' }));
        }
        return menus;
    }
}

module.exports = MenusService;