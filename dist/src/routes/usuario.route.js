"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_controller_1 = require("./../controllers/usuario.controller");
const express_1 = require("express");
const usuario_controller_2 = require("../controllers/usuario.controller");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
//path /api/v1/usuario
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("numeroDocumento", "El número de documento es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("email", "El correo electrónico es obligatorio")
        .not()
        .isEmpty()
        .isEmail(),
    validate_fields_1.validateFields,
], usuario_controller_2.crearUsuario);
router.get("/", usuario_controller_1.getUsuarios);
router.get("/:id", usuario_controller_1.getUnUsuario);
router.put("/:id", usuario_controller_1.updateUsuario);
router.delete("/:id", usuario_controller_1.eliminarUsuario);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map