// Amener le modele des commandes avec les relations
import { Commandes } from "../models/relation.js";

// Liste des commandes
export const commandesList = async (req, res) => {
    try {
        // Récupération de la liste des commandes depuis la base de données
        const commandes = await Commandes.findAll();
        res.status(200).json({ data: commandes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Ajout d'une commande
export const addCommande = async (req, res) => {
    // Informations de la nouvelle commande
    const commande = req.body;
    try {
        // Création de la commande dans la base de données
        await Commandes.create(commande);
        res.status(201).json({ message: "La commande a été ajoutée avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Mise à jour d'une commande
export const updateCommande = async (req, res) => {
    // ID de la commande à mettre à jour
    const { id } = req.params;
    try {
        // Recherche de la commande par son ID
        const commande = await Commandes.findByPk(id);
        // Nouvelles informations de la commande
        const newCommande = req.body;
        // Mise à jour de la commande
        await commande.update(newCommande);
        res.status(200).json({ message: "La commande a été mise à jour avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Suppression d'une commande
export const removeCommande = async (req, res) => {
    // ID de la commande à supprimer
    const { id } = req.params;
    try {
        // Suppression de la commande de la base de données
        await Commandes.destroy({ where: { id } });
        res.status(200).json({ message: `La commande ${id} a été supprimée avec succès` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
