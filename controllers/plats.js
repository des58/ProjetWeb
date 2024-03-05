// Amener le modele du plat avec les relations
import { Plats } from "../models/relation.js";

// Liste des plats
export const platsList = async (req, res) => {
    try {
        // Récupération de la liste des plats depuis la base de données
        const plats = await Plats.findAll();
        res.status(200).json({ data: plats });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Création d'un plat
export const addPlat = async (req, res) => {
    // Informations du nouveau plat
    const plat = req.body;
    try {
        // Création du plat dans la base de données
        await Plats.create(plat);
        res.status(201).json({ message: "Le plat a été créé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Mise à jour d'un plat
export const updatePlat = async (req, res) => {
    // ID du plat à mettre à jour
    const { id } = req.params;
    try {
        // Recherche du plat par son ID
        const plat = await Plats.findByPk(id);
        // Nouvelles informations du plat
        const newPlat = req.body;
        // Mise à jour du plat
        await plat.update(newPlat);
        res.status(200).json({ message: "Le plat a été mis à jour avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Suppression d'un plat
export const removePlat = async (req, res) => {
    // ID du plat à supprimer
    const { id } = req.params;
    try {
        // Suppression du plat de la base de données
        await Plats.destroy({ where: { id } });
        res.status(200).json({ message: `Le plat ${id} a été supprimé avec succès` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
