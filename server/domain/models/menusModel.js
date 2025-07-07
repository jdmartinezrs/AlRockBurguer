import Menu from '../../adapters/database/menusSchema.js'
//const menusSchema = require('../../adapters/database/menusSchema');
class MenusModel {

 async getAllMenus() {
    return await Menu.find({}).exec();
}
}
export default MenusModel;
