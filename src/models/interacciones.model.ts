import { Model, Schema, model } from "mongoose";

const InteraccionSchema = new Schema({
  cliente: {
    type: String,
    required: true,
  },
  llamadas: {
    type: Boolean,
  },
  correos: {
    type: Boolean,
  },
  reuniones: {
    type: Boolean,
  },
  comentarios: { type: String },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const InteraccionModel: Model<any> = model("interaciones", InteraccionSchema);
export default InteraccionModel;
