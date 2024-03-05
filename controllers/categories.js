// Amener le modele des catégories avec les relations
import { Categories } from "../models/relation.js";

// Liste des catégories
export const categoriesList = async (req, res) => {
    try {
        // Récupération de la liste des catégories depuis la base de données
        const categories = await Categories.findAll();
        res.status(200).json({ data: categories });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Ajout d'une catégorie
export const addCategory = async (req, res) => {
    // Informations de la nouvelle catégorie
    const category = req.body;
    try {
        // Création de la catégorie dans la base de données
        await Categories.create(category);
        res.status(201).json({ message: "La catégorie a été ajoutée avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Mise à jour d'une catégorie
export const updateCategory = async (req, res) => {
    // ID de la catégorie à mettre à jour
    const { id } = req.params;
    try {
        // Recherche de la catégorie par son ID
        const category = await Categories.findByPk(id);
        // Nouvelles informations de la catégorie
        const newCategory = req.body;
        // Mise à jour de la catégorie
        await category.update(newCategory);
        res.status(200).json({ message: "La catégorie a été mise à jour avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Suppression d'une catégorie
export const removeCategory = async (req, res) => {
    // ID de la catégorie à supprimer
    const { id } = req.params;
    try {
        // Suppression de la catégorie de la base de données
        await Categories.destroy({ where: { id } });
        res.status(200).json({ message: `La catégorie ${id} a été supprimée avec succès` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
