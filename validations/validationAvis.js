import { body, param } from "express-validator";

const avisRules = [
    body('contenu').notEmpty().withMessage("Le contenu de l'avis ne peut pas être vide"),
    body('date').isISO8601().withMessage("La date de l'avis doit être au format ISO8601 (YYYY-MM-DD)"),
    param('ID_avis').optional().isInt({ min: 1 }).withMessage("L'ID de l'avis doit être un entier positif")
];

export default avisRules;
