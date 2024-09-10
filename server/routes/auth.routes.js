import express from 'express';
import { login, register, refresh_token, logout, getUser } from '../controllers/auth.controller.js';
import { loginValidation, registerValidation } from '../validations/auth.validation.js';
import { validateRequest } from '../middlewares/validationResult.js';
import { checkAuth } from '../middlewares/authCheck.js';


const router = express.Router();

router.post('/login',loginValidation, validateRequest, login);
router.post('/refresh-token', refresh_token);
router.post("/register",registerValidation, validateRequest, register)
router.get('/user', checkAuth, getUser)
router.post("/logout", logout)


export default router;