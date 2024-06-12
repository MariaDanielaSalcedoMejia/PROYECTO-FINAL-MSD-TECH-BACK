"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./database/connection");
const cors_1 = __importDefault(require("cors"));
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
const cliente_route_1 = __importDefault(require("./routes/cliente.route"));
const lead_route_1 = __importDefault(require("./routes/lead.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const interacciones_route_1 = __importDefault(require("./routes/interacciones.route"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./docs/swagger")); // Ruta correcta al archivo de configuración de Swagger
class Server {
    constructor() {
        this.apiPaths = {
            usuario: "/api/v1/usuario",
            login: "/api/v1/login",
            cliente: "/api/v1/cliente",
            lead: "/api/v1/lead",
            interaccion: "/api/v1/interaccion",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        this.app.use("/documentation", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
        // Base de datos
        (0, connection_1.dbconnection)();
        // Métodos Iniciales
        this.middlewares();
        // Rutas
        this.routes();
    }
    miPrimerApi() {
        this.app.get("/", (req, res) => res.status(200).json({
            msg: "Api funcionando correctamente",
        }));
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        // Lectura del Body en json
        this.app.use(express_1.default.json());
        this.miPrimerApi();
    }
    routes() {
        this.app.use(this.apiPaths.usuario, usuario_route_1.default);
        this.app.use(this.apiPaths.cliente, cliente_route_1.default);
        this.app.use(this.apiPaths.lead, lead_route_1.default);
        this.app.use(this.apiPaths.login, auth_route_1.default);
        this.app.use(this.apiPaths.interaccion, interacciones_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo por el puerto", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map