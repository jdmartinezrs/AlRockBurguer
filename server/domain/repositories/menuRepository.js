const MenusModel = require('../models/menusModel');

class MenuRepository {

    async getAllMenusRepository() {
        try{
            const menusModel = new MenusModel();
            return await menusModel.getAllMenus();
        } catch (error){
            throw new Error(JSON.stringify({status: 400,message:'Error retrieving Menus'}));
        }

    }

}

module.exports = MenuRepository;


