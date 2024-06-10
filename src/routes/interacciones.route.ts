import { crearInteraccion, eliminarInteraccion, getInteraccion, getInteracciones, updateInteraccion } from "../controllers/interacciones.controller";
import { Router } from "express";
import { validateJWT } from "../middlewares/validate-jwt";

//creando path
//path/api/v1/interaccion

const router = Router();

router.post("/", validateJWT, crearInteraccion);
router.get("/", validateJWT, getInteracciones);
router.get("/:id", validateJWT, getInteraccion);
router.delete("/:id", validateJWT, eliminarInteraccion);
router.put("/:id", validateJWT, updateInteraccion);

export default router;
