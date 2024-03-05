// Amener le modele des avis avec les relations
import { Avis } from "../models/relation.js";

// Liste des avis
export const avisList = async (req, res) => {
    try {
        // Récupération de la liste des avis depuis la base de données
        const avis = await Avis.findAll();
        res.status(200).json({ data: avis });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Ajout d'un avis
export const addAvis = async (req, res) => {
    // Informations du nouvel avis
    const avis = req.body;
    try {
        // Création de l'avis dans la base de données
        await Avis.create(avis);
        res.status(201).json({ message: "L'avis a été ajouté avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Mise à jour d'un avis
export const updateAvis = async (req, res) => {
    // ID de l'avis à mettre à jour
    const { id } = req.params;
    try {
        // Recherche de l'avis par son ID
        const avis = await Avis.findByPk(id);
        // Nouvelles informations de l'avis
        const newAvis = req.body;
        // Mise à jour de l'avis
        await avis.update(newAvis);
        res.status(200).json({ message: "L'avis a été mis à jour avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Suppression d'un avis
export const removeAvis = async (req, res) => {
    // ID de l'avis à supprimer
    const { id } = req.params;
    try {
        // Suppression de l'avis de la base de données
        await Avis.destroy({ where: { id } });
        res.status(200).json({ message: `L'avis ${id} a été supprimé avec succès` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
