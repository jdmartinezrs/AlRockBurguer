const RestauranteModel = require ('../models/restauranteModel');

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

module.exports = RestauranteRepository;

