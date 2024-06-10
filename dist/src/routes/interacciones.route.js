"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interacciones_controller_1 = require("../controllers/interacciones.controller");
const express_1 = require("express");
const validate_jwt_1 = require("../middlewares/validate-jwt");
//creando path
//path/api/v1/interaccion
const router = (0, express_1.Router)();
router.post("/", validate_jwt_1.validateJWT, interacciones_controller_1.crearInteraccion);
router.get("/", validate_jwt_1.validateJWT, interacciones_controller_1.getInteracciones);
router.get("/:id", validate_jwt_1.validateJWT, interacciones_controller_1.getInteraccion);
router.delete("/:id", validate_jwt_1.validateJWT, interacciones_controller_1.eliminarInteraccion);
router.put("/:id", validate_jwt_1.validateJWT, interacciones_controller_1.updateInteraccion);
exports.default = router;
//# sourceMappingURL=interacciones.route.js.map