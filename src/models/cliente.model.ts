import { Model, Schema, model } from "mongoose";

const ClienteSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  numeroCelular: { type: Number },
  direccion: { type: String },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const ClienteModel: Model<any> = model("clientes", ClienteSchema);
export default ClienteModel;
