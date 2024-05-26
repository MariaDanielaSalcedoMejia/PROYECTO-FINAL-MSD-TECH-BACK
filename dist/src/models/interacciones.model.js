"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InteraccionSchema = new mongoose_1.Schema({
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
const InteraccionModel = (0, mongoose_1.model)("interaciones", InteraccionSchema);
exports.default = InteraccionModel;
//# sourceMappingURL=interacciones.model.js.map