// Amener le modele des détails de factures avec les relations
import { DetailsDeFactures } from "../models/relation.js";

// Liste des détails de factures
export const detailsDeFacturesList = async (req, res) => {
    try {
        // Récupération de la liste des détails de factures depuis la base de données
        const detailsDeFactures = await DetailsDeFactures.findAll();
        res.status(200).json({ data: detailsDeFactures });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Création d'un détail de facture
export const addDetailDeFacture = async (req, res) => {
    // Informations du nouveau détail de facture
    const detailDeFacture = req.body;
    try {
        // Création du détail de facture dans la base de données
        await DetailsDeFactures.create(detailDeFacture);
        res.status(201).json({ message: "Le détail de facture a été ajouté avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Mise à jour d'un détail de facture
export const updateDetailDeFacture = async (req, res) => {
    // ID du détail de facture à mettre à jour
    const { id } = req.params;
    try {
        // Recherche du détail de facture par son ID
        const detailDeFacture = await DetailsDeFactures.findByPk(id);
        // Nouvelles informations du détail de facture
        const newDetailDeFacture = req.body;
        // Mise à jour du détail de facture
        await detailDeFacture.update(newDetailDeFacture);
        res.status(200).json({ message: "Le détail de facture a été mis à jour avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Suppression d'un détail de facture
export const removeDetailDeFacture = async (req, res) => {
    // ID du détail de facture à supprimer
    const { id } = req.params;
    try {
        // Suppression du détail de facture de la base de données
        await DetailsDeFactures.destroy({ where: { id } });
        res.status(200).json({ message: `Le détail de facture ${id} a été supprimé avec succès` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
