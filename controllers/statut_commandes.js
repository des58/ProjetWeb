// Amener le modele du statut de commande avec les relations
import { StatutDeCommandes } from "../models/relation.js"

// Controller
export const statutCommandeList = async (req, res) => {

    // Liste des statuts de commande depuis la base de données
    const statutsCommande = await StatutDeCommandes.findAll()

    res.status(200).json({ data: statutsCommande })

}

// Création d'un statut de commande
export const addStatutCommande = async (req, res) => {
    // Les informations du nouveau statut de commande
    const statutCommande = req.body
    try {
        await StatutDeCommandes.create(statutCommande)
        res.status(201).json({ message: "Le statut de commande a été créé avec succès" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Mise à jour d'un statut de commande
export const updateStatutCommande = async (req, res) => {
    // L'identifiant actuel
    const { id } = req.params

    // Validation de l'identifiant
    if (!parseInt(id)) return res.status(404).json({ message: "Ce statut de commande n'existe pas" })
    const statutCommande = await StatutDeCommandes.findByPk(id)

    // Nouvelles informations
    const newStatutCommande = req.body
    try {
        await statutCommande.update(newStatutCommande)
        res.status(201).json({ message: "Statut de commande mis à jour avec succès" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Suppression d'un statut de commande
export const removeStatutCommande = async (req, res) => {
    const { id } = req.params
    try {
        await StatutDeCommandes.destroy({ where: { id } })
        res.status(200).json({ message: `Statut de commande ${id} supprimé avec succès` })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
