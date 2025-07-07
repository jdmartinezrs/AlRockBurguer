import MenuRepository from '../../domain/repositories/menuRepository.js';


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

export default MenusService;