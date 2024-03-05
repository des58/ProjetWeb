// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (entité en base de données)
const Utilisateurs = database.define('utilisateurs', {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    mot_de_passe: { type: DataTypes.STRING, allowNull: false },
    naissance: { type: DataTypes.DATE, field: 'dob' }, 
    photo: DataTypes.STRING, 
    telephone: DataTypes.INTEGER 

})

export default Utilisateurs
