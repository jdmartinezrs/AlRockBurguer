import Restaurante from '../../adapters/database/restaurantesSchema.js';

class RestauranteModel {

async getAllSeatRoomOne(){
    return await Restaurante.find({}).exec();
    
}
}
export default RestauranteModel;

