import {
  crearInteraccion,
  eliminarInteraccion,
  getInteraccion,
  getInteracciones,
  updateInteraccion,
} from "../controllers/interacciones.controller";
import { Router } from "express";
import { validateJWT } from "../middlewares/validate-jwt";

//creando path
//path/api/v1/interaccion

const router = Router();

/**
 * @swagger
 * /interaccion:
 *   post:
 *     tags:
 *       - interaccion
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
router.post("/", validateJWT, crearInteraccion);

/**
 * @swagger
 * /interaccion:
 *   get:
 *     tags:
 *       - interaccion
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
router.get("/", validateJWT, getInteracciones);

/**
 * @swagger
 * /interaccion/{id}:
 *   get:
 *     tags:
 *       - interaccion
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
router.get("/:id", validateJWT, getInteraccion);

/**
 * @swagger
 * /interaccion/{id}:
 *   delete:
 *     tags:
 *       - interaccion
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
router.delete("/:id", validateJWT, eliminarInteraccion);

/**
 * @swagger
 * /interaccion/{id}:
 *   put:
 *     tags:
 *       - interaccion
 *     summary: Actualiza una interacción por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
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
 *              comentarios:
 *                 type:string
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
router.put("/:id", validateJWT, updateInteraccion);

export default router;
