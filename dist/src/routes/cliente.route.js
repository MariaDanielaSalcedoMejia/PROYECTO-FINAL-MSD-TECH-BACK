"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../controllers/cliente.controller");
const validate_jwt_1 = require("../middlewares/validate-jwt");
//creando path
//path/api/v1/cliente
const router = (0, express_1.Router)();
/**
 * @swagger
 * /cliente:
 *   post:
 *     tags:
 *       - Cliente
 *     summary: Crea un nuevo cliente
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
router.post("/", validate_jwt_1.validateJWT, cliente_controller_1.crearCliente);
/**
 * @swagger
 * /cliente:
 *   get:
 *     tags:
 *       - Cliente
 *     summary: Obtiene una lista de todos los clientes
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
router.get("/", validate_jwt_1.validateJWT, cliente_controller_1.getClientes);
/**
 * @swagger
 * /cliente/{id}:
 *   get:
 *     tags:
 *       - Cliente
 *     summary: Obtiene un cliente por su ID
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
router.get("/:id", validate_jwt_1.validateJWT, cliente_controller_1.getCliente);
/**
 * @swagger
 * /cliente/{id}:
 *   delete:
 *     tags:
 *       - Cliente
 *     summary: Elimina un cliente por su ID
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
router.delete("/:id", validate_jwt_1.validateJWT, cliente_controller_1.eliminarCliente);
/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     tags:
 *       - Cliente
 *     summary: Actualiza un cliente por su ID
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
router.put("/:id", validate_jwt_1.validateJWT, cliente_controller_1.updateCliente);
exports.default = router;
//# sourceMappingURL=cliente.route.js.map