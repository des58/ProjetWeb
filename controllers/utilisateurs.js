// Amener le modele de l'utilisateur avec les relations
import { Utilisateurs } from "../models/relation.js"

// Controller
export const userList = async (req, res) => {

    // Liste des utilisateurs depuis la base de données
    const users = await Utilisateurs.findAll()

    res.status(200).json({ data: users })

}

// Création d'un utilisateur
export const addUser = async (req, res) => {
    // Les informations du nouvel utilisateur
    const user = req.body
    try {
        await Utilisateurs.create(user)
        res.status(201).json({ message: "L'utilisateur a été créé avec succès" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Mise à jour d'un utilisateur
export const updateUser = async (req, res) => {
    // L'identifiant actuel
    const { id } = req.params

    // Validation de l'identifiant
    if (!parseInt(id)) return res.status(404).json({ message: "Cet utilisateur n'existe pas" })
    const user = await Utilisateurs.findByPk(id)

    // Nouvelles informations
    const newUser = req.body
    try {
        await user.update(newUser)
        res.status(201).json({ message: "Utilisateur mis à jour avec succès" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Suppression d'un utilisateur
export const removeUser = async (req, res) => {
    const { id } = req.params
    try {
        await Utilisateurs.destroy({ where: { id } })
        res.status(200).json({ message: `Utilisateur ${id} supprimé avec succès` })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
