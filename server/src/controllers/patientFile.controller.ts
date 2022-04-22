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

    const id = req.params.id

    try {

        const patientFile = await PatientFile.findById(id).populate('content');
        if(!patientFile) {
            return res.status(404).json({
                status: false,
                message: 'Patient File not found'
            })
        }
        const patientContent = patientFile?.content;
        const patientContentArr = Object.values(patientContent)
        let refundablePrice = 0; 
        const refundableArr = patientContentArr.filter(item => {
            refundablePrice += (item.price * item.repaymentRate)/100
            return item.refundable === true
        }) 
    
        res.status(200).json({
            status: true,
            message:  refundableArr
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

export const calculateRepayment: RequestHandler = async (req , res ) => {

    const id = req.params.id
    try {
        const result = await PatientFile.findById(id).populate('content');
        console.log(result)
        // content.filter( => {})

    } catch (e: any) {
        
    }
}