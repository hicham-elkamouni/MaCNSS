import express from 'express';
import { loginAgent, registerAgent, getAllRessources, createRessource , addMedicalFile, getPatientFile } from "@controllers/index";

const router = express.Router();

router.post('/login', loginAgent);
router.post('/register', registerAgent);

router.get('/getAllRessources', getAllRessources);
router.post('/createRessource', createRessource);

router.get('/getPatientFile/:id', getPatientFile);
router.post('/addMedicalFile', addMedicalFile);

export { router };
