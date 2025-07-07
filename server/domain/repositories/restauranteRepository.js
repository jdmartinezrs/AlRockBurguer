import RestauranteModel from '../models/restauranteModel.js';

class RestauranteRepository {
    async getAllSeatRoomOneRepository() {
        try {
            const restauranteModel = new RestauranteModel();
            return await restauranteModel.getAllSeatRoomOne();
        } catch (error) {
            throw new Error(JSON.stringify({ status: 400, message: 'Error retrieving Seat Room One' }));
        }
    }
}

export default RestauranteRepository;

