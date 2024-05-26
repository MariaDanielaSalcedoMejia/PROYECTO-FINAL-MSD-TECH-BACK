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
exports.updateCliente = exports.getCliente = exports.eliminarCliente = exports.getClientes = exports.crearCliente = void 0;
const cliente_model_1 = __importDefault(require("../models/cliente.model"));
const crearCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const newCliente = new cliente_model_1.default(Object.assign({}, body));
        const clienteCreado = yield newCliente.save();
        res.status(200).json({
            ok: true,
            msg: "Cliente creado con exito",
            usuario: clienteCreado,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            error,
            msg: "Error al crear el cliente",
        });
    }
});
exports.crearCliente = crearCliente;
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield cliente_model_1.default.find();
        res.json({
            ok: true,
            clientes,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar los clientes",
        });
    }
});
exports.getClientes = getClientes;
const eliminarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const clienteEliminado = yield cliente_model_1.default.findByIdAndDelete({ _id: id });
        res.json({
            ok: true,
            clienteEliminado,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Cliente eliminado con exito",
        });
    }
});
exports.eliminarCliente = eliminarCliente;
const getCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const cliente = yield cliente_model_1.default.findById({ _id: id });
        res.json({
            ok: true,
            cliente,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al consultar el cliente seleccionado",
        });
    }
});
exports.getCliente = getCliente;
const updateCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { body } = req;
        const clienteActualizado = yield cliente_model_1.default.findByIdAndUpdate(id, body, {
            new: true,
        });
        res.json({
            ok: true,
            msg: "Cliente actualizado",
            usuario: clienteActualizado,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Error al actualizar el cliente seleccionado",
        });
    }
});
exports.updateCliente = updateCliente;
//# sourceMappingURL=cliente.controller.js.map