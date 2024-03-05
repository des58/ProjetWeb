// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (entité en base de données)
const Roles = database.define('roles', {
    nom: { type: DataTypes.STRING, allowNull: false }

})

export default Roles
