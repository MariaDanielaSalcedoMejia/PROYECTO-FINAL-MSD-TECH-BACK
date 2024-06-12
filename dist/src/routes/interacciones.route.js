"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interacciones_controller_1 = require("../controllers/interacciones.controller");
const express_1 = require("express");
const validate_jwt_1 = require("../middlewares/validate-jwt");
//creando path
//path/api/v1/interaccion
const router = (0, express_1.Router)();
/**
 * @swagger
 * /interaccione:
 *   post:
 *     tags:
 *       - Interacciones
 *     summary: Crea una nueva interacción
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Interaccion'
 *     responses:
 *       200:
 *         description: Interacción creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interaccion'
 *       400:
 *         description: Error en la solicitud
 */
router.post("/", validate_jwt_1.validateJWT, interacciones_controller_1.crearInteraccion);
/**
 * @swagger
 * /interaccione:
 *   get:
 *     tags:
 *       - Interacciones
 *     summary: Obtiene una lista de todas las interacciones
 *     responses:
 *       200:
 *         description: Lista de interacciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Interaccion'
 */
router.get("/", validate_jwt_1.validateJWT, interacciones_controller_1.getInteracciones);
/**
 * @swagger
 * /interaccione/{id}:
 *   get:
 *     tags:
 *       - Interacciones
 *     summary: Obtiene una interacción por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la interacción
 *     responses:
 *       200:
 *         description: Detalles de la interacción
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interaccion'
 *       404:
 *         description: Interacción no encontrada
 */
router.get("/:id", validate_jwt_1.validateJWT, interacciones_controller_1.getInteraccion);
/**
 * @swagger
 * /interaccione/{id}:
 *   delete:
 *     tags:
 *       - Interacciones
 *     summary: Elimina una interacción por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la interacción
 *     responses:
 *       200:
 *         description: Interacción eliminada
 *       404:
 *         description: Interacción no encontrada
 */
router.delete("/:id", validate_jwt_1.validateJWT, interacciones_controller_1.eliminarInteraccion);
/**
 * @swagger
 * /interaccione/{id}:
 *   put:
 *     tags:
 *       - Interacciones
 *     summary: Actualiza una interacción por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la interacción
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Interaccion'
 *     responses:
 *       200:
 *         description: Interacción actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Interaccion'
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Interacción no encontrada
 */
router.put("/:id", validate_jwt_1.validateJWT, interacciones_controller_1.updateInteraccion);
exports.default = router;
//# sourceMappingURL=interacciones.route.js.map