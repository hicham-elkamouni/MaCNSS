import { PatientFile } from "@models/PatientFile";
import { RequestHandler } from "express";

// add medical file
export const addMedicalFile: RequestHandler = async (req , res ) => {
    const data = req.body

    try {
        const patientFile = new PatientFile(data);
        await patientFile.save()

        res.status(201).json({
            status: true,
            message: patientFile 
        })
    } catch (e: any) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }

}
