import e from 'express';
import { query, param } from 'express-validator';
import mongoose from 'mongoose';

class MenusValidator {
  getAllMenusValidator() {
    return [
      query('menus')
        .optional()
        .custom(value => mongoose.Types.ObjectId.isValid(value))
        .withMessage('restaurante_id debe ser un ObjectId válido'),
    ];
  }
}

export default  MenusValidator;