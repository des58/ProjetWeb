import { body, param } from "express-validator";

const categorieRules = [
    body('nom').notEmpty().withMessage("Le nom de la catégorie ne peut pas être vide"),
    param('ID_catégories').optional().isInt({ min: 1 }).withMessage("L'ID de la catégorie doit être un entier positif")
];

export default categorieRules;
