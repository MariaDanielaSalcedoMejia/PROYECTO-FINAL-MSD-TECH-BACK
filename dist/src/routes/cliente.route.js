"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../controllers/cliente.controller");
const validate_jwt_1 = require("../middlewares/validate-jwt");
//creando path
//path/api/v1/cliente
const router = (0, express_1.Router)();
router.post("/", validate_jwt_1.validateJWT, cliente_controller_1.crearCliente);
router.get("/", validate_jwt_1.validateJWT, cliente_controller_1.getClientes);
router.get("/:id", validate_jwt_1.validateJWT, cliente_controller_1.getCliente);
router.delete("/:id", validate_jwt_1.validateJWT, cliente_controller_1.eliminarCliente);
router.put("/:id", validate_jwt_1.validateJWT, cliente_controller_1.updateCliente);
exports.default = router;
//# sourceMappingURL=cliente.route.js.map