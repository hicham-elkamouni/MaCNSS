import { Agent } from "@models/Agent";
import { RequestHandler } from "express";

// add medical file
export const addMedicalFile: RequestHandler = async (req , res ) => {
    const data = req.body

    try {
        const agent = new Agent(data);
        await agent.save()

        res.status(201).json({
            status: true,
            message: { agent }
        })
    } catch (e: any) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }

}