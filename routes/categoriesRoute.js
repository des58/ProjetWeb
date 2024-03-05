// Importer la fonction route
import { Router } from "express";

// Importer les controllers pour la creation des routes
import { addCategory, categoriesList, removeCategory, updateCategory } from "../controllers/departments.js";

const router = Router();

router
    .get("/", categoriesList)
    .post("/", addCategory)
    .put("/:id", updateCategory)
    .delete("/:id", removeCategory);

export default router;
