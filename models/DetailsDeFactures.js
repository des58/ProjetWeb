// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (entité en base de données)
const DetailsDeFactures = database.define('details_de_factures', {
    quantite: { type: DataTypes.INTEGER, allowNull: false },
    prix: { type: DataTypes.DECIMAL, allowNull: false }

})

export default DetailsDeFactures
