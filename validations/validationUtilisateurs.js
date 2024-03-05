import { body, param } from "express-validator";

// Regex pour le nom et prénom
const nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

// Regex pour le mot de passe
const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

// Regex pour le numéro de téléphone (format international)
const phoneRegex = /^\+\d{1,3}\d{4,}$/;

const utilisateurRules = [
    body('nom').matches(nameRegex).withMessage("Le nom n'est pas conforme"),
    body('prenom').matches(nameRegex).withMessage("Le prénom n'est pas conforme"),
    body('email').exists().withMessage("L'email est obligatoire").isEmail().withMessage("Ceci n'est pas un email valide"),
    body('mot_de_passe').isString()
        .isLength({ min: 8 }).withMessage('Au moins 8 caractères')
        .matches(/\d/).withMessage('Au moins un chiffre')
        .matches(/[a-z]/).withMessage('Au moins une lettre minuscule')
        .matches(/[A-Z]/).withMessage('Au moins une lettre majuscule')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Au moins un caractère spécial'),
    body('naissance').isDate({ delimiters: '-' }).withMessage('La date de naissance est incorrecte'),
    body('photo').optional().isURL().withMessage("La photo doit être une URL valide"), // Validation pour la photo
    body('telephone').optional().matches(phoneRegex).withMessage("Le numéro de téléphone doit être au format international"), // Validation pour le téléphone
    param('ID_Utilisateurs').optional().isInt({ min: 1 }).withMessage("L'ID de l'utilisateur doit être un entier positif")
]

export default utilisateurRules
