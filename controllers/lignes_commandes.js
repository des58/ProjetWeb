// Amener le modele des lignes de commandes avec les relations
import { LignesDeCommandes } from "../models/relation.js";

// Liste des lignes de commandes
export const lignesDeCommandesList = async (req, res) => {
    try {
        // Récupération de la liste des lignes de commandes depuis la base de données
        const lignesDeCommandes = await LignesDeCommandes.findAll();
        res.status(200).json({ data: lignesDeCommandes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Ajout d'une ligne de commande
export const addLigneDeCommande = async (req, res) => {
    // Informations de la nouvelle ligne de commande
    const ligneDeCommande = req.body;
    try {
        // Création de la ligne de commande dans la base de données
        await LignesDeCommandes.create(ligneDeCommande);
        res.status(201).json({ message: "La ligne de commande a été ajoutée avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Mise à jour d'une ligne de commande
export const updateLigneDeCommande = async (req, res) => {
    // ID de la ligne de commande à mettre à jour
    const { id } = req.params;
    try {
        // Recherche de la ligne de commande par son ID
        const ligneDeCommande = await LignesDeCommandes.findByPk(id);
        // Nouvelles informations de la ligne de commande
        const newLigneDeCommande = req.body;
        // Mise à jour de la ligne de commande
        await ligneDeCommande.update(newLigneDeCommande);
        res.status(200).json({ message: "La ligne de commande a été mise à jour avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Suppression d'une ligne de commande
export const removeLigneDeCommande = async (req, res) => {
    // ID de la ligne de commande à supprimer
    const { id } = req.params;
    try {
        // Suppression de la ligne de commande de la base de données
        await LignesDeCommandes.destroy({ where: { id } });
        res.status(200).json({ message: `La ligne de commande ${id} a été supprimée avec succès` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
