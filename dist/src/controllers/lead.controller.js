"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatelead = exports.getLead = exports.eliminarLead = exports.getLeads = exports.crearLead = void 0;
const lead_model_1 = __importDefault(require("../models/lead.model"));
const crearLead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const newLead = new lead_model_1.default(Object.assign({}, body));
        const leadCreado = yield newLead.save();
        res.status(200).json({
            ok: true,
            msg: "Lead creado con exito",
            usuario: leadCreado,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear el lead",
        });
    }
});
exports.crearLead = crearLead;
const getLeads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leads = yield lead_model_1.default.find();
        res.json({
            ok: true,
            leads,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar los leads",
        });
    }
});
exports.getLeads = getLeads;
const eliminarLead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const leadEliminado = yield lead_model_1.default.findByIdAndDelete({ _id: id });
        res.json({
            ok: true,
            leadEliminado,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Lead eliminado con exito",
        });
    }
});
exports.eliminarLead = eliminarLead;
const getLead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const lead = yield lead_model_1.default.findById({ _id: id });
        res.json({
            ok: true,
            lead,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar el cliente seleccionado",
        });
    }
});
exports.getLead = getLead;
const updatelead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { body } = req;
        const leadActualizado = yield lead_model_1.default.findByIdAndUpdate(id, body, {
            new: true,
        });
        res.json({
            ok: true,
            msg: "Lead actualizado",
            lead: leadActualizado,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al actualizar el lead seleccionado",
        });
    }
});
exports.updatelead = updatelead;
//# sourceMappingURL=lead.controller.js.map