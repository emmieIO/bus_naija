import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { registerValidation } from '../validations/register.validation.js';


const router = express.Router();

router.post('/login', login);
router.post("/register",[registerValidation], register)


export default router;