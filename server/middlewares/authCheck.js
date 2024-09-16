import jwt from 'jsonwebtoken'
import { apiError } from '../utils/apiError.js';
import User from '../models/User.js';

export const checkAuth = (req, res, next) => {
    // check if the authorization header present
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        throw apiError('Unauthorized', 401)
    }

    // check if the token is valid
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_SECRET, (err, user) => {
        if (err) {
            throw apiError('Unauthorized', 401)
        }
        req.user = user;
        next()
    })

}


export const isAdmin = async (req, res, next)=>{
    try {
        const {userId} = req.user;
        const user = await User.find({_id:userId});
        if(user.role !== 'admin'){
            throw apiError('Unauthorized', 401)
        }
        next()
    } catch (error) {
        next(error)
    }

}

export const isUser = async (req, res, next)=>{
    try {
        const {userId} = req.user;
        const user = await User.find({_id:userId});
        if(user.role !== 'user' || user.role !== 'admin'){
            throw apiError('Unauthorized', 401)
        }
        next()
    } catch (error) {
        next(error)
    }
}

export const busOperator = async (req, res, next) =>{
    try {
        const {userId} = req.user;
        const user = await User.find({_id:userId});
        if(user.role !== 'bus operator'){
            throw apiError('Unauthorized', 401)
        }
        next()
    } catch (error) {
        next(error)
    }
}

