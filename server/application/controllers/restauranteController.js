import { validationResult } from 'express-validator';
import RestauranteServices from '../services/restauranteServices.js';


class RestaurantesController {
    constructor(){
        this.restauranteServices = new RestauranteServices();
    }

    async getAllSeatRoomController(req, res) {
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
            const restaurantes = await this.restauranteServices.getAllSeatRoomService();
            res.status(200).json(restaurantes);
        } catch (error){
            const errorObj = JSON.parse(error.message);
            res.status(errorObj.status).json({message: errorObj.message});
        }
}
    }

export default RestaurantesController;
