import {body} from 'express-validator'
import User from '../models/user.model.js';

export const registerValidation = [
    body('firstname').isString().notEmpty().withMessage('Firstname is required'),
    body('lastname').isString().notEmpty().withMessage('Fastname is required'),
    body('email').isEmail().withMessage('Enter a vaild email')
    .isString().notEmpty().withMessage('Email is required'),
    body('email').custom(async (val)=>{
        const existingUser = await User.findOne({email:val})
        if(existingUser){
            throw new Error('Email is already in use')
        }
    }),
    body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/\d/).withMessage('Password must contain a number')
    .matches(/[A-Z]/).withMessage('Password must contain an uppercase letter')
    .matches(/[a-z]/).withMessage('Password must contain a lowercase letter')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain a special character'),
    body('phone').isString().notEmpty().withMessage('Phone is required'),
    body('address').isString().notEmpty().withMessage('Address is required')
];

export const loginValidation = [
    body('email').isEmail().withMessage('Email is required'),
    body('password').isString().notEmpty().withMessage("Password is required")
];

export const passwordResetValidation = [
    body('newPassword')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/\d/).withMessage('Password must contain a number')
    .matches(/[A-Z]/).withMessage('Password must contain an uppercase letter')
    .matches(/[a-z]/).withMessage('Password must contain a lowercase letter')
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain a special character'),
    body('passwordConfirmation').isString().notEmpty().withMessage('Email is required'),

];  

