"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LeadSchema = new mongoose_1.Schema({
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
const LeadModel = (0, mongoose_1.model)("leads", LeadSchema);
exports.default = LeadModel;
//# sourceMappingURL=lead.model.js.map