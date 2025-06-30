const { query, param } = require('express-validator');
const mongoose = require('mongoose');

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

module.exports = MenusValidator;