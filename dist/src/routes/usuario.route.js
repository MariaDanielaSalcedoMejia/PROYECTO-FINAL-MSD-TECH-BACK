"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_controller_1 = require("./../controllers/usuario.controller");
const express_1 = require("express");
const usuario_controller_2 = require("../controllers/usuario.controller");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /usuario:
 *   post:
 *     tags:
 *       - Usuarios
 *     summary: Crea un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               tipoDocumento:
 *                 type: string
 *               numeroDocumento:
 *                 type: string
 *               numeroCelular:
 *                 type: number
 *               password:
 *                 type: string
 *               rol:
 *                 type: string
 *             required:
 *               - nombre
 *               - numeroDocumento
 *               - email
 *               - numeroCelular
 *               - password
 *               - tipoDocumento
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/usuarios'
 *       400:
 *         description: Error en la solicitud
 */
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
/**
 * @swagger
 * /usuario:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Obtiene una lista de todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/usuarios'
 */
router.get("/", usuario_controller_1.getUsuarios);
/**
 * @swagger
 * /usuario/{id}:
 *   get:
 *     tags:
 *       - Usuarios
 *     summary: Obtiene un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Detalles del usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/usuarios'
 *       404:
 *         description: Usuario no encontrado
 */
router.get("/:id", validate_jwt_1.validateJWT, usuario_controller_1.getUnUsuario);
/**
 * @swagger
 * /usuario/{id}:
 *   put:
 *     tags:
 *       - Usuarios
 *     summary: Actualiza un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/usuarios'
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/usuarios'
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Usuario no encontrado
 */
router.put("/:id", validate_jwt_1.validateJWT, usuario_controller_1.updateUsuario);
/**
 * @swagger
 * /usuario/{id}:
 *   delete:
 *     tags:
 *       - usuarios
 *     summary: Elimina un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: Usuario no encontrado
 */
router.delete("/:id", validate_jwt_1.validateJWT, usuario_controller_1.eliminarUsuario);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map