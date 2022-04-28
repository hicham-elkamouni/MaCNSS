import express from 'express';
import { loginAgent, registerAgent, getAllRessources, createRessource , addMedicalFile, getPatientFile, getAllPatientFiles, calculateRepayment , generateUUID} from "@controllers/index";

const router = express.Router();

router.post('/login', loginAgent);
router.post('/register', registerAgent);

router.get('/getAllRessources', getAllRessources);
router.post('/createRessource', createRessource);

router.get('/getPatientFile/:id', getPatientFile);
router.get('/calculateRepayment/:id', calculateRepayment);
router.get('/getAllPatientFiles', getAllPatientFiles);
router.post('/addMedicalFile', addMedicalFile);


// handle patient file
// patient login
// consultation patient infos

export { router };
