import { Router } from "express";
import {
  crearCliente,
  eliminarCliente,
  getCliente,
  getClientes,
  updateCliente,
} from "../controllers/cliente.controller";
import { validateJWT } from "../middlewares/validate-jwt";

//creando path
//path/api/v1/cliente

const router = Router();

/**
 * @swagger
 * /clientes:
 *   post:
 *     tags:
 *       - Clientes
 *     summary: Crea un nuevo cliente
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       400:
 *         description: Error en la solicitud
 */
router.post("/", validateJWT, crearCliente);

/**
 * @swagger
 * /clientes:
 *   get:
 *     tags:
 *       - Clientes
 *     summary: Obtiene una lista de todos los clientes
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de clientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 */
router.get("/", validateJWT, getClientes);

/**
 * @swagger
 * /clientes/{id}:
 *   get:
 *     tags:
 *       - Clientes
 *     summary: Obtiene un cliente por su ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Detalles del cliente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente no encontrado
 */
router.get("/:id", validateJWT, getCliente);

/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     tags:
 *       - Clientes
 *     summary: Elimina un cliente por su ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente eliminado
 *       404:
 *         description: Cliente no encontrado
 */
router.delete("/:id", validateJWT, eliminarCliente);

/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     tags:
 *       - Clientes
 *     summary: Actualiza un cliente por su ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Cliente no encontrado
 */
router.put("/:id", validateJWT, updateCliente);

export default router;
