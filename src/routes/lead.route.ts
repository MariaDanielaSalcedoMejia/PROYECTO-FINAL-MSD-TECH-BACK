import { validateJWT } from '../middlewares/validate-jwt';
import { crearLead, eliminarLead, getLead, getLeads, updatelead } from './../controllers/lead.controller';
import { Router } from "express";


//creando path
//path/api/v1/lead

const router = Router();

router.post("/", crearLead);
router.get("/", getLeads);
router.get("/:id", getLead);
router.delete("/:id", eliminarLead);
router.put("/:id", updatelead);

export default router;
