import RestauranteRepository from '../../domain/repositories/restauranteRepository.js'

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

export default RestauranteServices;
