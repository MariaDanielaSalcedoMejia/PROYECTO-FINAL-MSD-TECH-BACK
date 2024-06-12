import {
  eliminarUsuario,
  getUnUsuario,
  getUsuarios,
  updateUsuario,
} from "./../controllers/usuario.controller";
import { Router } from "express";
import { crearUsuario } from "../controllers/usuario.controller";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";


const router = Router();

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
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("numeroDocumento", "El número de documento es obligatorio")
      .not()
      .isEmpty(),
    check("email", "El correo electrónico es obligatorio")
      .not()
      .isEmpty()
      .isEmail(),
    validateFields,
  ],
  crearUsuario
);

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
router.get("/", getUsuarios);

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
router.get("/:id",  getUnUsuario);

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
router.put("/:id",  updateUsuario);

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
router.delete("/:id",  eliminarUsuario);

export default router;
