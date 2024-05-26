import { Model, Schema, model } from "mongoose";

const LeadSchema = new Schema({
  cliente: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
  estado: { type: Boolean },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const LeadModel: Model<any> = model("leads", LeadSchema);
export default LeadModel;
