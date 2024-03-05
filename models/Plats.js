// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (entité en base de données)
const Plats = database.define('plats', {
    nom: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    prix: { type: DataTypes.DECIMAL, allowNull: false },
    photo: DataTypes.STRING

})

export default Plats
