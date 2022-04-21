import express from 'express';
import {loginAgent, registerAgent} from "@controllers/index";

const router = express.Router();

router.get('/login', loginAgent);
router.post('/register', registerAgent);

export { router };
