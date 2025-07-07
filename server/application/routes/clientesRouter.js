import express from 'express';
import ClientesController from '../controllers/clientesController.js';
import ClientesValidator from '../validator/clientesValidator.js';

const router = express.Router();
const clientesValidator = new ClientesValidator();
const clientesController = new ClientesController();

router.post('/clientes', clientesValidator.validateClientesData(), (req, res) => clientesController.insertANewClientController(req, res));


export default router; 