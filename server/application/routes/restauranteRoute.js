import  express  from 'express';
import RestauranteController from '../controllers/restauranteController.js';
import  RestauranteValidator from '../validator/restauranteValidator.js';

const router = express.Router();
const restauranteValidator = new RestauranteValidator();
const restauranteController = new RestauranteController();

router.get('/restaurantes', restauranteValidator.getAllSeatRoomValidator(), (req, res) => restauranteController.getAllSeatRoomController(req, res));


export default router;


