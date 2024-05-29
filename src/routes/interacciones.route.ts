import { crearInteraccion, eliminarInteraccion, getInteraccion, getInteracciones, updateInteraccion } from "../controllers/interacciones.controller";
import { Router } from "express";
import { validateJWT } from "../middlewares/validate-jwt";

//creando path
//path/api/v1/interaccion

const router = Router();

router.post("/",crearInteraccion);
router.get("/", getInteracciones);
router.get("/:id", getInteraccion);
router.delete("/:id", eliminarInteraccion);
router.put("/:id", updateInteraccion);

export default router;
