"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_jwt_1 = require("../middlewares/validate-jwt");
const interacciones_controller_1 = require("../controllers/interacciones.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /interaccion:
 *   post:
 *     tags:
 *       - Interacciones
 *     summary: Crea una nueva interacción
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/interacciones'
 *     responses:
 *       200:
 *         description: Interacción creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/interacciones'
 *       400:
 *         description: Error en la solicitud
 */
router.post("/", validate_jwt_1.validateJWT, interacciones_controller_1.crearInteraccion);
/**
 * @swagger
 * /interaccion:
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
 *                 $ref: '#/components/schemas/interacciones'
 */
router.get("/", validate_jwt_1.validateJWT, interacciones_controller_1.getInteracciones);
/**
 * @swagger
 * /interaccion/{id}:
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
 *               $ref: '#/components/schemas/interacciones'
 *       404:
 *         description: Interacción no encontrada
 */
router.get("/:id", validate_jwt_1.validateJWT, interacciones_controller_1.getInteraccion);
/**
 * @swagger
 * /interaccion/{id}:
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
 * /interaccion/{id}:
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente:
 *                 type: string
 *               llamadas:
 *                 type: boolean
 *               correos:
 *                 type: boolean
 *               reuniones:
 *                 type: boolean
 *               comentarios:
 *                 type: string
 *     responses:
 *       200:
 *         description: Interacción actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/interacciones'
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Interacción no encontrada
 */
router.put("/:id", validate_jwt_1.validateJWT, interacciones_controller_1.updateInteraccion);
exports.default = router;
//# sourceMappingURL=interacciones.route.js.map