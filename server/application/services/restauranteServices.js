const RestauranteRepository = require('../../domain/repositories/restauranteRepository')

class RestauranteServices {
    constructor(){
        this.restauranteServices = new RestauranteRepository();
    }

    async getAllSeatRoomService(){
        const restaurantes = await this.restauranteServices.getAllSeatRoomOneRepository();
        if(!restaurantes){
            throw new Error(JSON.stringify({ status: 404, message: 'Restaurantes not found' }));
        }
        return restaurantes;
    }
}

module.exports = RestauranteServices;
