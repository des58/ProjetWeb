// Importer la fonction route
import { Router } from "express";

// Importer les controllers pour la creation des routes
import { addCommande, commandesList, removeCommande, updateCommande } from "../controllers/departments.js";

const router = Router();

router
    .get("/", commandesList)
    .post("/", addCommande)
    .put("/:id", updateCommande)
    .delete("/:id", removeCommande);

export default router;
