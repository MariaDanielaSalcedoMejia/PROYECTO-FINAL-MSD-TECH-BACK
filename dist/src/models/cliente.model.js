"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClienteSchema = new mongoose_1.Schema({
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
const ClienteModel = (0, mongoose_1.model)("clientes", ClienteSchema);
exports.default = ClienteModel;
//# sourceMappingURL=cliente.model.js.map