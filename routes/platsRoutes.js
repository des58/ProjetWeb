// Importer la fonction route
import { Router } from "express";

// Importer les controllers pour la creation des routes
import { addPlat, platsList, removePlat, updatePlat } from "../controllers/departments.js";

const router = Router();

router
    .get("/", platsList)
    .post("/", addPlat)
    .put("/:id", updatePlat)
    .delete("/:id", removePlat);

export default router;
