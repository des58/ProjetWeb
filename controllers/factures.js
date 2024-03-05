// Amener le modele des factures avec les relations
import { Factures } from "../models/relation.js";

// Liste des factures
export const facturesList = async (req, res) => {
    try {
        // Récupération de la liste des factures depuis la base de données
        const factures = await Factures.findAll();
        res.status(200).json({ data: factures });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Ajout d'une facture
export const addFacture = async (req, res) => {
    // Informations de la nouvelle facture
    const facture = req.body;
    try {
        // Création de la facture dans la base de données
        await Factures.create(facture);
        res.status(201).json({ message: "La facture a été ajoutée avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Mise à jour d'une facture
export const updateFacture = async (req, res) => {
    // ID de la facture à mettre à jour
    const { id } = req.params;
    try {
        // Recherche de la facture par son ID
        const facture = await Factures.findByPk(id);
        // Nouvelles informations de la facture
        const newFacture = req.body;
        // Mise à jour de la facture
        await facture.update(newFacture);
        res.status(200).json({ message: "La facture a été mise à jour avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Suppression d'une facture
export const removeFacture = async (req, res) => {
    // ID de la facture à supprimer
    const { id } = req.params;
    try {
        // Suppression de la facture de la base de données
        await Factures.destroy({ where: { id } });
        res.status(200).json({ message: `La facture ${id} a été supprimée avec succès` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



