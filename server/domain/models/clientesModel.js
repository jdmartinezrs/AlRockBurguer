import Cliente from '../../adapters/database/clientesSchema.js';
import mongoose from 'mongoose';

class ClientesModel {

    async insertANewClientModel(productData){
        const usercreate = new Cliente(productData);
        return await usercreate.save();
    }

}

export default ClientesModel;



