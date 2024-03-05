import { body, param } from "express-validator";

const platRules = [
    body('nom').notEmpty().withMessage("Le nom du plat ne peut pas être vide"),
    body('description').notEmpty().withMessage("La description du plat ne peut pas être vide"),
    body('prix').isNumeric().withMessage("Le prix du plat doit être un nombre"),
   // body('photo').notEmpty().withMessage("La photo du plat ne peut pas être vide"),
    param('ID_plats').optional().isInt({ min: 1 }).withMessage("L'ID du plat doit être un entier positif")
];

export default platRules;
