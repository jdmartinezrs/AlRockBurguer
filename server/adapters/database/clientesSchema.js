import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ClienteSchema = new Schema({
  nombre: { type: String, required: true },
  celular: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  clave: { type: String, required: true } // Puedes aplicar hash luego con bcrypt
}, { timestamps: true });

export default model('Cliente', ClienteSchema);
