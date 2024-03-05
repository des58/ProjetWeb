// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (entité en base de données)
const StatutDeCommandes = database.define('statut_de_commandes', {
    nom: { type: DataTypes.STRING, allowNull: false }

});

export default StatutDeCommandes
