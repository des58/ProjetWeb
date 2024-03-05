// Amener le modele du departement avec les relations
import { Department } from "../models/relation.js"

//Controller
export const departmentList = async (req, res) => {

    //Liste des departements depuis la base de donnees
    const departments = await Department.findAll()

    res.status(200).json({ data: departments })

}




