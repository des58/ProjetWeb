// Importer la fonction route
import { Router } from "express";

// Importer les controllers pour la creation des routes
import { addAvis, avisList, removeAvis, updateAvis } from "../controllers/departments.js";

const router = Router();

router
    .get("/", avisList)
    .post("/", addAvis)
    .put("/:id", updateAvis)
    .delete("/:id", removeAvis);

export default router;
