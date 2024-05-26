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
exports.updateInteraccion = exports.getInteraccion = exports.eliminarInteraccion = exports.getInteracciones = exports.crearInteraccion = void 0;
const interacciones_model_1 = __importDefault(require("../models/interacciones.model"));
const crearInteraccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const newInteraccion = new interacciones_model_1.default(Object.assign({}, body));
        const interaccionCreada = yield newInteraccion.save();
        res.status(200).json({
            ok: true,
            msg: "Interaccion creada con exito",
            usuario: interaccionCreada,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear la interaccion",
        });
    }
});
exports.crearInteraccion = crearInteraccion;
const getInteracciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const interaccion = yield interacciones_model_1.default.find();
        res.json({
            ok: true,
            interaccion,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar las interacciones",
        });
    }
});
exports.getInteracciones = getInteracciones;
const eliminarInteraccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const interaccionEliminada = yield interacciones_model_1.default.findByIdAndDelete({ _id: id });
        res.json({
            ok: true,
            interaccionEliminada,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Interaccion eliminada con exito",
        });
    }
});
exports.eliminarInteraccion = eliminarInteraccion;
const getInteraccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const interaccion = yield interacciones_model_1.default.findById({ _id: id });
        res.json({
            ok: true,
            interaccion,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar la interaccion seleccionada",
        });
    }
});
exports.getInteraccion = getInteraccion;
const updateInteraccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { body } = req;
        const interaccionActualizada = yield interacciones_model_1.default.findByIdAndUpdate(id, body, {
            new: true,
        });
        res.json({
            ok: true,
            msg: "Interaccion actualizada",
            lead: interaccionActualizada,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al actualizar el lead seleccionado",
        });
    }
});
exports.updateInteraccion = updateInteraccion;
//# sourceMappingURL=interacciones.controller.js.map