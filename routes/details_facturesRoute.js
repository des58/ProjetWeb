// Importer la fonction route
import { Router } from "express";

// Importer les controllers pour la creation des routes
import { addDetailsFacture, detailsFacturesList, removeDetailsFacture, updateDetailsFacture } from "../controllers/departments.js";

const router = Router();

router
    .get("/", detailsFacturesList)
    .post("/", addDetailsFacture)
    .put("/:id", updateDetailsFacture)
    .delete("/:id", removeDetailsFacture);

export default router;
