import Restaurante from '../../adapters/database/restaurantesSchema.js';
import mongoose from 'mongoose';
class RestauranteModel {

async getAllSeatRoomOne(){
    return await Restaurante.find({}).exec();
}

async reservarMesasPorIds(mesasIds) {
    return await Restaurante.updateMany(
        {},
        { $set: { "salones.$[].mesas.$[mesa].estado": "reservada" } },
        {
            arrayFilters: [
                { "mesa.mesa_id": { $in: mesasIds.map(id => new mongoose.Types.ObjectId(id)) } }
            ]
        }
    ).exec();
}

async liberarMesasPorIds(mesasIds) {
    return await Restaurante.updateMany(
        {},
        {
            $set: { "salones.$[].mesas.$[mesa].estado": "disponible" }
        },
        {
            arrayFilters: [
                { "mesa.mesa_id": { $in: mesasIds.map(id => new mongoose.Types.ObjectId(id)) } }
            ]
        }
    );
}

}
export default RestauranteModel;

