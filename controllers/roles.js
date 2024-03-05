// Importer le modèle Roles avec les relations
import { Roles } from "../models/relation.js"

// Liste des rôles
export const rolesList = async (req, res) => {
    try {
        // Récupération de la liste des rôles depuis la base de données
        const roles = await Roles.findAll();
        res.status(200).json({ data: roles });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Création d'un rôle
export const addRole = async (req, res) => {
    // Informations du nouveau rôle
    const role = req.body;
    try {
        // Création du rôle dans la base de données
        await Roles.create(role);
        res.status(201).json({ message: "Le rôle a été créé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Mise à jour d'un rôle
export const updateRole = async (req, res) => {
    // ID du rôle à mettre à jour
    const { id } = req.params;
    try {
        // Recherche du rôle par son ID
        const role = await Roles.findByPk(id);
        // Nouvelles informations du rôle
        const newRole = req.body;
        // Mise à jour du rôle
        await role.update(newRole);
        res.status(200).json({ message: "Le rôle a été mis à jour avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Suppression d'un rôle
export const removeRole = async (req, res) => {
    // ID du rôle à supprimer
    const { id } = req.params;
    try {
        // Suppression du rôle de la base de données
        await Roles.destroy({ where: { id } });
        res.status(200).json({ message: `Le rôle ${id} a été supprimé avec succès` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
