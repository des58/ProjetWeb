// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (entité en base de données)
const Commandes = database.define('commandes', {
    date: { type: DataTypes.DATE, allowNull: false },
    montant_total: { type: DataTypes.DECIMAL, allowNull: false },

});

export default Commandes
