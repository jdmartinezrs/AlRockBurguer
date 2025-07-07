import {validationResult} from 'express-validator';
import ClientesService from '../services/clientesService.js';

class ClientesController {
  constructor() {
    this.clientesService = new ClientesService();
  }

  insertANewClientController = async (req, res) => {
    try {
      const data = req.body;
      const newClient = await this.clientesService.insertANewClientService(data);
      res.status(201).json({ message: 'Cliente creado', data: newClient });
    } catch (error) {
      res.status(500).json({ message: 'Error', error: error.message });
    }
  }
}

export default ClientesController;

