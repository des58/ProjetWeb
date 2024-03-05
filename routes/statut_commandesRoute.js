// Importer la fonction route
import { Router } from "express";

// Importer les controllers pour la creation des routes
import { addStatutCommande, statutCommandesList, removeStatutCommande, updateStatutCommande } from "../controllers/departments.js";

const router = Router();

router
    .get("/", statutCommandesList)
    .post("/", addStatutCommande)
    .put("/:id", updateStatutCommande)
    .delete("/:id", removeStatutCommande);

export default router;
