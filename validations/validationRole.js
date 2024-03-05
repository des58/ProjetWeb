import { body, param } from "express-validator";

const roleRules = [
    body('nom').notEmpty().withMessage("Le nom ne peut pas être vide"),
    param('ID_roles').optional().isInt({ min: 1 }).withMessage("L'ID du rôle doit être un entier positif")
];

export default roleRules;
