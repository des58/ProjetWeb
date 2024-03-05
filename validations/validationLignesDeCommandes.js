import { body, param } from "express-validator";

const statutCommandeRules = [
    body('nom').isIn(['En préparation', 'Prêt', 'Livré']).withMessage("Le statut de commande doit être 'En préparation', 'Prêt' ou 'Livré'"),
    param('ID_statut_de_commande').optional().isInt({ min: 1 }).withMessage("L'ID du statut de commande doit être un entier positif")
];

export default statutCommandeRules;
