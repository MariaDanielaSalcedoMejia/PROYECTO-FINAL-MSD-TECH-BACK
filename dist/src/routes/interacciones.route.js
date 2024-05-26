"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interacciones_controller_1 = require("../controllers/interacciones.controller");
const express_1 = require("express");
//creando path
//path/api/v1/interaccion
const router = (0, express_1.Router)();
router.post("/", interacciones_controller_1.crearInteraccion);
router.get("/", interacciones_controller_1.getInteracciones);
router.get("/:id", interacciones_controller_1.getInteraccion);
router.delete("/:id", interacciones_controller_1.eliminarInteraccion);
router.put("/:id", interacciones_controller_1.updateInteraccion);
exports.default = router;
//# sourceMappingURL=interacciones.route.js.map