import { RequestHandler } from 'express';
import { Ressource } from "@models/Ressource";

// get all ressources
export const getAllRessources: RequestHandler = async (req, res) => {
    try {
        const docs = await Ressource.find({});
        res.status(200).json({
            status: true,
            message: { docs }
        })
    } catch (e:any) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}

// create ressource
export const createRessource: RequestHandler = async (req, res) => {
    console.log(req.body);
    const data = req.body
    try {
        const result = await Ressource.insertMany(data, { ordered: true });
        res.status(201).json({
            status: true,
            message: result
        })
    } catch (e: any) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}
