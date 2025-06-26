const Menu = require('../adapters/database/menusSchema')

class MenusModel{

    async getAllMenus(){
        return await Menu.find({}).exec();
    }




}

module.exports =  MenusModel