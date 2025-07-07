import ClientesRepository from "../../domain/repositories/clientesRepositories.js";

class ClientesService {
    constructor(){
        this.clientesRepository = new ClientesRepository();
    }

    async insertANewClientService(data) {
        try{
        return await this.clientesRepository.insertANewClientRepository(data);
        } catch (error){
            console.error('Error in insertANewClientService:', error);
            throw new Error(JSON.stringify({status: 500, message: 'Error Inserting New Client'}));
        }
    }
}

export default ClientesService;

