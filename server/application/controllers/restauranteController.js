import { validationResult } from 'express-validator';
import RestauranteServices from '../services/restauranteServices.js';


class RestaurantesController {
    constructor(){
        this.restauranteServices = new RestauranteServices();
    }

async getAllSeatRoomController(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const restaurantes = await this.restauranteServices.getAllSeatRoomService();
        res.status(200).json(restaurantes);

    } catch (error) {
        let errorObj = { status: 500, message: error.message };

        try {
            errorObj = JSON.parse(error.message);
        } catch (_) {
        
        }

        res.status(errorObj.status).json({ message: errorObj.message });
    }
}
async reservarMesasController(req, res) {
    try {
        const { mesasIds } = req.body;

        if (!mesasIds || !Array.isArray(mesasIds)) {
            return res.status(400).json({ message: 'mesasIds es obligatorio y debe ser un array.' });
        }

        const resultado = await this.restauranteServices.reservarMesasService(mesasIds);

        res.status(200).json({ message: 'Mesas reservadas exitosamente.', resultado });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async liberarMesasController(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({ errors: errors.array() });

        const { mesasIds } = req.body;
        const resultado = await this.restauranteServices.liberarMesasService(mesasIds);

        res.status(200).json({ message: "Mesas liberadas exitosamente", resultado });
    } catch (error) {
        console.error(' Error liberando mesas:', error.message);
        res.status(500).json({ message: "Error liberando las mesas" });
    }
}




    }

export default RestaurantesController;
