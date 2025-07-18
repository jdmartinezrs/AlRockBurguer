import RestauranteRepository from '../../domain/repositories/restauranteRepository.js'

class RestauranteServices {
    constructor(){
         this.restauranteRepository = new RestauranteRepository();
    }

async getAllSeatRoomService(){
        const restaurantes = await this.restauranteRepository.getAllSeatRoomOneRepository();
        if(!restaurantes){
            throw new Error(JSON.stringify({ status: 404, message: 'Restaurantes not found' }));
        }
        return restaurantes;
    }

  async reservarMesasService(mesasIds) {
        return await this.restauranteRepository.reservarMesasPorIdsRepository(mesasIds);
    }

async liberarMesasService(mesasIds) {
    return await this.restauranteRepository.liberarMesasPorIdsRepository(mesasIds);
}
}

export default RestauranteServices;
