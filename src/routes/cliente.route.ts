import { Router } from "express";
import { crearCliente, eliminarCliente, getCliente, getClientes, updateCliente } from "../controllers/cliente.controller";
import { validateJWT } from "../middlewares/validate-jwt";


//creando path
//path/api/v1/cliente

const router = Router();

router.post("/", crearCliente);
router.get("/", getClientes);
router.get("/:id", getCliente);
router.delete("/:id", eliminarCliente);
router.put("/:id", updateCliente);

export default router;
