import {body,validationResult} from 'express-validator'
import User from '../models/user.model.js';

export const registerValidation = [
    body('firstname').isString().withMessage('Firstname is required'),
    body('lastname').isString().withMessage('Fastname is required'),
    body('email').isEmail().withMessage('Email is required'),
    body('email').custom(async (val)=>{
        const existingUser = await User.findOne({email:val})
        if(existingUser){
            throw new Error('Email is already in use')
        }
    }),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('phone').isString().withMessage('Phone is required'),
    body('address').isString().withMessage('Address is required'),
    (req,res,next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        next()
    }
];