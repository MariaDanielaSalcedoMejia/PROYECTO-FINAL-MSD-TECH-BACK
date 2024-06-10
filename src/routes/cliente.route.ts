import { Router } from "express";
import { crearCliente, eliminarCliente, getCliente, getClientes, updateCliente } from "../controllers/cliente.controller";
import { validateJWT } from "../middlewares/validate-jwt";


//creando path
//path/api/v1/cliente

const router = Router();

router.post("/", validateJWT, crearCliente);
router.get("/", validateJWT, getClientes);
router.get("/:id", validateJWT, getCliente);
router.delete("/:id", validateJWT, eliminarCliente);
router.put("/:id", validateJWT, updateCliente);

export default router;
