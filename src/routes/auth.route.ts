import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import {
  cambioContrasena,
  login,
  olvidoContrasena,
  renewToken,
} from "../controllers/auth.controller";
import { validateJWT } from "../middlewares/validate-jwt";

const router = Router();

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
router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  login
);

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
router.post(
  "/olvidocontrasena",
  [
    check("email", "El email es obligatorio").not().isEmpty().isEmail(),
    check("numeroDocumento", "El número de documento es obligatorio")
      .not()
      .isEmpty(),
    validateFields,
  ],
  olvidoContrasena
);

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
router.put(
  "/cambiocontrasena",
  [
    check("password", "El password es obligatorio").not().isEmpty(),
    validateFields,
  ],
  cambioContrasena
);

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
router.get("/", validateJWT, renewToken);

export default router;
