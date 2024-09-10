import { apiError } from './../utils/apiError.js';
import User from "../models/user.model.js"
import { generateToken, generateRefreshToken } from '../utils/tokens.js';
import jwt from 'jsonwebtoken'

class UserService {

    async createUser(data){
        try{
            const user = await User.create(data)
            return user
        }catch(error){
            throw error
        }
    }

    async userLogin(data){
        try{
            const {email, password} = data;
            const user = await User.findOne({email})
            if(!user){
                throw apiError('Invalid email or password',403)
            }
            const isMatch = await user.matchPassword(password)
            if(!isMatch){
                throw apiError('Credentials not found in our records', 403)
            }
            const access_token = generateToken(user._id);
            const refresh_token = generateRefreshToken();
            user.refreshToken = refresh_token
            user.save();
            return {access_token, refresh_token, user:{...user._doc, password:undefined, refreshToken:undefined}}
        }catch(error){
            throw error;
        }
    }

    async refresh(token){
        if(!token){
            throw apiError('refresh token is required', 401)
        }
        try {
            const user = await User.findOne({refreshToken:token})
            
            if(!user || user.refreshToken != token){
                throw apiError('Invalid refresh token', 401)
            }
            const access_token = generateToken(user._id)
            const newRefreshToken = generateRefreshToken()
            user.refreshToken = newRefreshToken
            user.save()
            return {access_token, newRefreshToken}
        } catch (error) {
            throw error
        }

    }
}

const userService = new UserService();
export default userService;
