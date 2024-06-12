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
 * /login:
 *   post:
 *     tags:
 *       - Login
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
 * /login/olvidocontrasena:
 *   post:
 *     tags:
 *       - Login
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
 * /login/cambiocontrasena:
 *   put:
 *     tags:
 *       - Login
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
 * /login:
 *   get:
 *     tags:
 *       - Login
 *     summary: Renovar token
 *     responses:
 *       200:
 *         description: Token renovado correctamente
 *       401:
 *         description: No autorizado, token inválido
 */
router.get("/", validateJWT, renewToken);

export default router;
