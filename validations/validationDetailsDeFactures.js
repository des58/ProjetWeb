import { body, param } from "express-validator";

const detailsFactureRules = [
    body('quantité').isInt({ min: 1 }).withMessage("La quantité doit être un entier positif"),
    body('prix').isNumeric().withMessage("Le prix doit être un nombre"),
    param('ID_Details_de_facture').optional().isInt({ min: 1 }).withMessage("L'ID des détails de facture doit être un entier positif")
];

export default detailsFactureRules;
