"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lead_controller_1 = require("./../controllers/lead.controller");
const express_1 = require("express");
//creando path
//path/api/v1/lead
const router = (0, express_1.Router)();
router.post("/", lead_controller_1.crearLead);
router.get("/", lead_controller_1.getLeads);
router.get("/:id", lead_controller_1.getLead);
router.delete("/:id", lead_controller_1.eliminarLead);
router.put("/:id", lead_controller_1.updatelead);
exports.default = router;
//# sourceMappingURL=lead.route.js.map