// Importer la fonction route
import { Router } from "express";

// Importer les controllers pour la creation des routes
import { addRole, rolesList, removeRole, updateRole } from "../controllers/departments.js";

const router = Router();

router
    .get("/", rolesList)
    .post("/", addRole)
    .put("/:id", updateRole)
    .delete("/:id", removeRole);

export default router;
