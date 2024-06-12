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
exports.cambioContrasena = exports.olvidoContrasena = exports.renewToken = exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const usuario_model_1 = __importDefault(require("../models/usuario.model"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
const email_1 = __importDefault(require("../helpers/email"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const obtenerDireccionIp_1 = require("../helpers/obtenerDireccionIp");
const config_1 = require("../config/config");
const ubicacionIp_model_1 = __importDefault(require("../models/ubicacionIp.model"));
const environment = config_1.config[process.env.NODE_ENV || "desarrollo"];
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ipAddress = environment.ip || req.ip;
    console.log(ipAddress);
    const { email, password } = req.body;
    try {
        // Verificar el email
        const usuario = yield usuario_model_1.default.findOne({ email: email });
        if (!usuario) {
            return res.status(401).json({
                ok: false,
                msg: "Las credenciales no son válidas",
            });
        }
        //Verificar el password
        const validarPassword = bcryptjs_1.default.compareSync(password, usuario.password);
        if (!validarPassword) {
            return res.status(401).json({
                ok: false,
                msg: "Las credenciales no son válidas",
            });
        }
        // Generar Token
        const token = yield (0, jwt_1.default)(usuario._id, usuario.email);
        const ubicacionIp = yield (0, obtenerDireccionIp_1.obtenerUbicacionPorIP)(ipAddress);
        const ubicacion = new ubicacionIp_model_1.default(Object.assign({ usuario: usuario.id }, ubicacionIp));
        const ubicacionGuardada = yield ubicacion.save();
        res.status(200).json({
            ok: true,
            usuario,
            token,
            ubicacionGuardada,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            error,
            msg: "Hable con el administrador",
        });
    }
});
exports.login = login;
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req._id;
    try {
        if (typeof id === "undefined") {
            throw new Error("No existe el ID");
        }
        const usuario = yield usuario_model_1.default.findById(id);
        // Generar el Token
        const token = yield (0, jwt_1.default)(id.toString());
        res.json({
            ok: true,
            token,
            usuario,
        });
    }
    catch (error) {
        console.error(error);
        res.status(401).json({
            ok: false,
            error,
            msg: "Hable con el administrador",
        });
    }
});
exports.renewToken = renewToken;
const olvidoContrasena = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, numeroDocumento } = req.body;
    try {
        const existeUsuario = yield usuario_model_1.default.findOne({
            email,
            numeroDocumento,
        });
        if (!existeUsuario) {
            resp.status(400).json({
                ok: false,
                msg: "Los datos no coinciden",
            });
        }
        const id = existeUsuario === null || existeUsuario === void 0 ? void 0 : existeUsuario._id;
        if (id) {
            //Generar Token
            const token = yield (0, jwt_1.default)(id, email, "1h", process.env.JWT_SECRET_PASS);
            // Guardar el Token
            existeUsuario.token = token;
            yield existeUsuario.save();
            const nombre = existeUsuario.nombre;
            const templatePath = path_1.default.join(__dirname, "../templates/olvidoContrasena.html");
            const emailTemplate = fs_1.default.readFileSync(templatePath, "utf8");
            const personalizarEmail = emailTemplate
                .replace("{{name}}", nombre)
                .replace("{{token}}", existeUsuario.token);
            (0, email_1.default)("fefyasilta@gufum.com", "Cambio de contraseña", personalizarEmail);
            resp.status(200).json({
                ok: true,
                msg: "Proceso éxitoso",
                usuario: existeUsuario,
            });
        }
    }
    catch (error) {
        console.error(error);
        resp.status(400).json({
            ok: false,
            msg: "No se logró validar sus datos",
        });
    }
});
exports.olvidoContrasena = olvidoContrasena;
const cambioContrasena = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req._id;
    const { password } = req.body;
    const tokenPass = req.header("x-token-pass");
    try {
        if (!password || !tokenPass) {
            return res.status(400).json({
                ok: false,
                msg: "Valores invalidos",
            });
        }
        const usuario = yield usuario_model_1.default.findOne({ token: tokenPass });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: "El token ya fue utilizado",
            });
        }
        const newPassword = bcryptjs_1.default.hashSync(password, 10);
        const actualizarPassword = yield usuario_model_1.default.findByIdAndUpdate(id, {
            password: newPassword,
            token: "",
        }, { new: true });
        if (!actualizarPassword) {
            return res.status(400).json({
                ok: false,
                msg: "Error al actualizar la contraseña",
            });
        }
        return res.status(200).json({
            ok: true,
            msg: "Contraseña actualizada",
        });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({
            ok: false,
            msg: "Error al actualizar la contraseña, hable con el administrador",
        });
    }
});
exports.cambioContrasena = cambioContrasena;
//# sourceMappingURL=auth.controller.js.map