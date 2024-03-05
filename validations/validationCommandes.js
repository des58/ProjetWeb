import { body, param } from "express-validator";

const commandeRules = [
    body('date').isISO8601().withMessage("La date de la commande doit être au format ISO8601 (YYYY-MM-DD)"),
    body('montant_total').isNumeric().withMessage("Le montant total de la commande doit être un nombre"),
    param('ID_commandes').optional().isInt({ min: 1 }).withMessage("L'ID de la commande doit être un entier positif")
];

export default commandeRules;
