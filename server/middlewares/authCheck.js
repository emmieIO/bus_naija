import jwt from 'jsonwebtoken'
import { apiError } from '../utils/apiError.js';

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