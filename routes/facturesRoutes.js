// Importer la fonction route
import { Router } from "express";

// Importer les controllers pour la creation des routes
import { addFacture, facturesList, removeFacture, updateFacture } from "../controllers/departments.js";

const router = Router();

router
    .get("/", facturesList)
    .post("/", addFacture)
    .put("/:id", updateFacture)
    .delete("/:id", removeFacture);

export default router;
