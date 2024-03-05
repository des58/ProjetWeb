import { body, param } from "express-validator";

const factureRules = [
    body('date').isISO8601().withMessage("La date de la facture doit être au format ISO8601 (YYYY-MM-DD)"),
    body('montant_total').isNumeric().withMessage("Le montant total de la facture doit être un nombre"),
    param('ID_factures').optional().isInt({ min: 1 }).withMessage("L'ID de la facture doit être un entier positif")
];

export default factureRules;

