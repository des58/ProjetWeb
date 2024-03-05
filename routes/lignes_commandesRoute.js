// Importer la fonction route
import { Router } from "express";

// Importer les controllers pour la creation des routes
import { addLigneCommande, lignesCommandesList, removeLigneCommande, updateLigneCommande } from "../controllers/departments.js";

const router = Router();

router
    .get("/", lignesCommandesList)
    .post("/", addLigneCommande)
    .put("/:id", updateLigneCommande)
    .delete("/:id", removeLigneCommande);

export default router;
