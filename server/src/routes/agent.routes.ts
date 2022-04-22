import express from 'express';
import { loginAgent, registerAgent, getAllRessources, createRessource , addMedicalFile, getPatientFile, getAllPatientFiles } from "@controllers/index";

const router = express.Router();

router.post('/login', loginAgent);
router.post('/register', registerAgent);

router.get('/getAllRessources', getAllRessources);
router.post('/createRessource', createRessource);

router.get('/getPatientFile/:id', getPatientFile);
router.get('/getAllPatientFiles', getAllPatientFiles);
router.post('/addMedicalFile', addMedicalFile);

export { router };
