"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_jwt_1 = require("../middlewares/validate-jwt");
const lead_controller_1 = require("./../controllers/lead.controller");
const express_1 = require("express");
//creando path
//path/api/v1/lead
const router = (0, express_1.Router)();
router.post("/", validate_jwt_1.validateJWT, lead_controller_1.crearLead);
router.get("/", validate_jwt_1.validateJWT, lead_controller_1.getLeads);
router.get("/:id", validate_jwt_1.validateJWT, lead_controller_1.getLead);
router.delete("/:id", validate_jwt_1.validateJWT, lead_controller_1.eliminarLead);
router.put("/:id", validate_jwt_1.validateJWT, lead_controller_1.updatelead);
exports.default = router;
//# sourceMappingURL=lead.route.js.map