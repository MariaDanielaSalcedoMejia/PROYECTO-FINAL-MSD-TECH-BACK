"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../controllers/cliente.controller");
//creando path
//path/api/v1/cliente
const router = (0, express_1.Router)();
router.post("/", cliente_controller_1.crearCliente);
router.get("/", cliente_controller_1.getClientes);
router.get("/:id", cliente_controller_1.getCliente);
router.delete("/:id", cliente_controller_1.eliminarCliente);
router.put("/:id", cliente_controller_1.updateCliente);
exports.default = router;
//# sourceMappingURL=cliente.route.js.map