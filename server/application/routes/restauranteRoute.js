const express = require('express');
const RestauranteController = require('../controllers/restauranteController');
const RestauranteValidator = require('../validator/restauranteValidator');

const router = express.Router();
const restauranteValidator = new RestauranteValidator();
const restauranteController = new RestauranteController();

router.get('/restaurantes', restauranteValidator.getAllSeatRoomValidator(), (req, res) => restauranteController.getAllSeatRoomController(req, res));


module.exports = router;

