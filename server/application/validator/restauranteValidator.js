import {query, param, body} from 'express-validator';
import mongoose from 'mongoose';

class RestauranteValidator {
  getAllSeatRoomValidator() {
    return [
      query('restaurante_id')
        .optional()
        .custom(value => mongoose.Types.ObjectId.isValid(value))
        .withMessage('restaurante_id debe ser un ObjectId válido'),
    ];
  }

  getRestauranteByIdValidator() {
    return [
      param('id')
        .exists()
        .withMessage('El id del restaurante es requerido')
        .bail()
        .custom(value => mongoose.Types.ObjectId.isValid(value))
        .withMessage('El id del restaurante debe ser un ObjectId válido'),
    ];
  }

   reservarMesasValidator() {
        return [
            body('mesasIds')
                .isArray({ min: 1 })
                .withMessage('mesasIds debe ser un arreglo con al menos un ID'),

            body('mesasIds.*')
                .custom(id => mongoose.Types.ObjectId.isValid(id))
                .withMessage('Cada mesasIds debe ser un ObjectId válido')
        ];
    }
}

export default RestauranteValidator;
