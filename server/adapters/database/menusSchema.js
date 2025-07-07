import mongoose from 'mongoose';

const { Schema, model, Types } = mongoose;

const HamburguesaSchema = new Schema({
  hamburguesa_id: { type: Types.ObjectId, required: true },
  nombre: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  imagen: String
}, { _id: false });

const BebidaSchema = new Schema({
  bebida_id: { type: Types.ObjectId, required: true },
  nombre: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  imagen: String
}, { _id: false });

const MenuSchema = new Schema({
  restaurante_id: { type: Types.ObjectId, ref: 'Restaurante', required: true },
  hamburguesas: { type: [HamburguesaSchema], default: [] },
  bebidas: { type: [BebidaSchema], default: [] }
}, {
  timestamps: true // opcional pero útil
});

export default model('Menu', MenuSchema, 'menus');
