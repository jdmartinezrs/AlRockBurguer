import ClientesModel from '../models/clientesModel.js'


class ClientesRepository {

    async insertANewClientRepository(productData) {
        try{
            const clientesModel = new ClientesModel();
            return await clientesModel.insertANewClientModel(productData);
        } catch (error){
            throw new Error(JSON.stringify({status: 500, message:'Error Inserting New Client'}));


        }
    }


}

export default ClientesRepository;