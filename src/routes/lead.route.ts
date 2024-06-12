import { validateJWT } from "../middlewares/validate-jwt";
import {
  crearLead,
  eliminarLead,
  getLead,
  getLeads,
  updatelead,
} from "./../controllers/lead.controller";
import { Router } from "express";

//creando path
//path/api/v1/lead

const router = Router();

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
 *             $ref: '#/components/schemas/Lead'
 *     responses:
 *       200:
 *         description: Lead creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lead'
 *       400:
 *         description: Error en la solicitud
 */
router.post("/", validateJWT, crearLead);

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
 *                 $ref: '#/components/schemas/Lead'
 */
router.get("/", validateJWT, getLeads);

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
 *               $ref: '#/components/schemas/Lead'
 *       404:
 *         description: Lead no encontrado
 */
router.get("/:id", validateJWT, getLead);

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
router.delete("/:id", validateJWT, eliminarLead);

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
 *             $ref: '#/components/schemas/Lead'
 *     responses:
 *       200:
 *         description: Lead actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lead'
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Lead no encontrado
 */
router.put("/:id", validateJWT, updatelead);

export default router;
