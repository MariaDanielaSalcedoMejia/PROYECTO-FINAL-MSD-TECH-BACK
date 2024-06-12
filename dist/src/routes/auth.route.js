"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
const auth_controller_1 = require("../controllers/auth.controller");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /auth:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Iniciar sesión
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Sesión iniciada correctamente
 *       400:
 *         description: Error en la solicitud
 */
router.post("/", [
    (0, express_validator_1.check)("email", "El email es obligatorio").isEmail(),
    (0, express_validator_1.check)("password", "El password es obligatorio").not().isEmpty(),
    validate_fields_1.validateFields,
], auth_controller_1.login);
/**
 * @swagger
 * /auth/olvidocontrasena:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Solicitar cambio de contraseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               numeroDocumento:
 *                 type: string
 *             required:
 *               - email
 *               - numeroDocumento
 *     responses:
 *       200:
 *         description: Se ha enviado la solicitud para cambiar la contraseña
 *       400:
 *         description: Error en la solicitud
 */
router.post("/olvidocontrasena", [
    (0, express_validator_1.check)("email", "El email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("numeroDocumento", "El número de documento es obligatorio")
        .not()
        .isEmpty(),
    validate_fields_1.validateFields,
], auth_controller_1.olvidoContrasena);
/**
 * @swagger
 * /auth/cambiocontrasena:
 *   put:
 *     tags:
 *       - Auth
 *     summary: Cambiar contraseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *             required:
 *               - password
 *     responses:
 *       200:
 *         description: Contraseña cambiada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.put("/cambiocontrasena", [
    (0, express_validator_1.check)("password", "El password es obligatorio").not().isEmpty(),
    validate_fields_1.validateFields,
], auth_controller_1.cambioContrasena);
/**
 * @swagger
 * /auth:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Renovar token
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token renovado correctamente
 *       401:
 *         description: No autorizado, token inválido
 */
router.get("/", validate_jwt_1.validateJWT, auth_controller_1.renewToken);
exports.default = router;
//# sourceMappingURL=auth.route.js.map