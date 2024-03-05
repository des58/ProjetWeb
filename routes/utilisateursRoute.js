// Importer la fonction route
import { Router } from "express";

// Importer les controllers pour la creation des routes
import { addUtilisateur, utilisateursList, removeUtilisateur, updateUtilisateur } from "../controllers/departments.js";

const router = Router();

router
    .get("/", utilisateursList)
    .post("/", addUtilisateur)
    .put("/:id", updateUtilisateur)
    .delete("/:id", removeUtilisateur);

export default router;
