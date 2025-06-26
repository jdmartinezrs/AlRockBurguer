import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const ReservaSchema = new Schema({
  reserva_fecha: { type: Date, required: true },
  cliente_id: { type: Types.ObjectId, ref: 'Cliente', required: true },
  mesa_id: [{ type: Types.ObjectId, required: true }] // array de mesas
}, { timestamps: true });

export default model('Reserva', ReservaSchema);

