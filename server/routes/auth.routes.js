import express from 'express';
import {
    login,
    register,
    getUser,
    userVerification,
    resendVerificationCode,
    forgotPassword,
    resetPassword } from '../controllers/auth.controller.js';
import { loginValidation, registerValidation } from '../validations/auth.validation.js';
import { validateRequest } from '../middlewares/validationResult.js';
import { checkAuth, isVerified } from '../middlewares/authCheck.js';


const router = express.Router();

router.post('/login',loginValidation, validateRequest, login);
router.post("/register",registerValidation, validateRequest, register)
router.post("/verify-email", checkAuth, userVerification);
router.post("/resend-verification-code", checkAuth, resendVerificationCode);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get('/me', [checkAuth], getUser)



export default router;