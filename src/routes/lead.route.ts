import { validateJWT } from '../middlewares/validate-jwt';
import { crearLead, eliminarLead, getLead, getLeads, updatelead } from './../controllers/lead.controller';
import { Router } from "express";


//creando path
//path/api/v1/lead

const router = Router();

router.post("/", validateJWT, crearLead);
router.get("/", validateJWT, getLeads);
router.get("/:id", validateJWT, getLead);
router.delete("/:id", validateJWT, eliminarLead);
router.put("/:id", validateJWT, updatelead);

export default router;
