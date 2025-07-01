const Restaurante = require('../../adapters/database/restaurantesSchema')

class RestauranteModel {

async getAllSeatRoomOne(){
    return await Restaurante.find({}).exec();
    
}
}
module.exports = RestauranteModel;
