"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_jwt_1 = require("../middlewares/validate-jwt");
const lead_controller_1 = require("./../controllers/lead.controller");
const express_1 = require("express");
//creando path
//path/api/v1/lead
const router = (0, express_1.Router)();
/**
 * @swagger
 * /lead:
 *   post:
 *     tags:
 *       - Leads
 *     summary: Crea un nuevo lead
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               estado:
 *                 type:boolean
 *
 *     responses:
 *       200:
 *         description: Lead creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Leads'
 *       400:
 *         description: Error en la solicitud
 */
router.post("/", validate_jwt_1.validateJWT, lead_controller_1.crearLead);
/**
 * @swagger
 * /lead:
 *   get:
 *     tags:
 *       - Leads
 *     summary: Obtiene una lista de todos los leads
 *     responses:
 *       200:
 *         description: Lista de leads
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Leads'
 */
router.get("/", validate_jwt_1.validateJWT, lead_controller_1.getLeads);
/**
 * @swagger
 * /lead/{id}:
 *   get:
 *     tags:
 *       - Leads
 *     summary: Obtiene un lead por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del lead
 *     responses:
 *       200:
 *         description: Detalles del lead
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Leads'
 *       404:
 *         description: Lead no encontrado
 */
router.get("/:id", validate_jwt_1.validateJWT, lead_controller_1.getLead);
/**
 * @swagger
 * /lead/{id}:
 *   delete:
 *     tags:
 *       - Leads
 *     summary: Elimina un lead por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del lead
 *     responses:
 *       200:
 *         description: Lead eliminado
 *       404:
 *         description: Lead no encontrado
 */
router.delete("/:id", validate_jwt_1.validateJWT, lead_controller_1.eliminarLead);
/**
 * @swagger
 * /lead/{id}:
 *   put:
 *     tags:
 *       - Leads
 *     summary: Actualiza un lead por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del lead
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Leads'
 *     responses:
 *       200:
 *         description: Lead actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Leads'
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Lead no encontrado
 */
router.put("/:id", validate_jwt_1.validateJWT, lead_controller_1.updatelead);
exports.default = router;
//# sourceMappingURL=lead.route.js.map