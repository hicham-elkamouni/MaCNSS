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

// get single patient file
export const getPatientFile: RequestHandler = async (req , res ) => {

    console.log("inside getSinglePatientFile");
    const id = req.params.id

    try {
        const patientFile = await PatientFile.findById(id);
        res.status(200).json({
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

// get all patient files
export const getAllPatientFiles: RequestHandler = async (req , res ) => {
    try {
        const docs = await PatientFile.find({});
        res.status(200).json({
            status: true,
            message: docs
        })
    } catch (e:any) {
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}
