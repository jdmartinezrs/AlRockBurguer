import {body, query, param} from 'express-validator';

class ClientesValidator {

validateClientesData = () => {

    return [
        body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isString().withMessage('El nombre debe ser una cadena de texto'),

        body('celular')
        .isString().withMessage('El celular debe ser una cadena de texto'), 

        body('correo')
        .notEmpty().withMessage('El correo es obligatorio')
        .isEmail().withMessage('El correo debe ser un email válido'),

        body('clave')
        .notEmpty().withMessage('La clave es obligatoria')
        .isString()
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener al menos 8 caracteres') 

    ]
}

}

export default ClientesValidator;
