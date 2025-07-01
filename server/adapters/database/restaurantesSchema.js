const mongoose = require('mongoose');
const { Schema } = mongoose;

const MesaSchema = new Schema({
  mesa_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  nombre_mesa: {
    type: String,
    required: true
  },
  numero_sillas: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    enum: ['disponible', 'ocupada', 'reservada'],
    default: 'disponible'
  },
  mesa_imagen: String
}, { _id: false }); 

const SalonSchema = new Schema({
  nombre_sala: {
    type: String,
    required: true
  },
  precio_por_mesa: {
    type: Number,
    required: true
  },
  descripcion: String,
  mesas: [MesaSchema]
}, { _id: true });

const RestauranteSchema = new Schema({
  ciudad: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  barrio: {
    type: String,
    required: true
  },
  salones: [SalonSchema]
}, { timestamps: true });

module.exports = mongoose.model('Restaurante', RestauranteSchema);
