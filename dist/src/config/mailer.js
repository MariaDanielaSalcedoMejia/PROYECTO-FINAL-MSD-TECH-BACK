"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const config_1 = require("./config");
const nodemailer_1 = __importDefault(require("nodemailer"));
const environment = config_1.config[process.env.NODE_ENV || "desarrollo"];
const { host, port, email, password } = environment.email;
exports.transporter = nodemailer_1.default.createTransport({
    host: host,
    port,
    secure: false,
    auth: {
        user: email,
        pass: password,
    },
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    },
});
exports.transporter
    .verify()
    .then(() => {
    console.log("Puede enviar correos electrónicos");
})
    .catch(() => {
    console.log("Error al enviar correos");
});
//# sourceMappingURL=mailer.js.map