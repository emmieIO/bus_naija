import User from "../models/user.model.js";
import userService from "../services/userService.js";
import { apiError } from "../utils/apiError.js";



export const register = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({ ...user._doc, password: undefined });
    } catch (error) {
        next(error);
    }


}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const response = await userService.userLogin({ email, password });
        const { token, user} = response;

        res.json({
            success:true,
            message:"Login successful",
            token,
            user:{...user._doc,
            password:undefined,
            refreshToken:undefined}
        });
    } catch (error) {
        next(error)

    }
}

export const refresh_token = async (req, res, next) => {
    try {
        const {refresh_token} = req.cookies;
        const data = await userService.refresh(refresh_token);
        const {access_token, newRefreshToken} = data
        res.cookie("refresh_token", newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        res.cookie("access_token", access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: '',
            maxAge:  15 * 60 * 1000,
        })
        res.json({access_token});
    } catch (error) {
        next(error)
    }
}


export const getUser = async(req,res,next)=>{
    try {
        const {userId} = req.user;
        const user = await User.findById(userId).lean();
        res.json({...user, password:undefined})
    } catch (error) {
        next(error)
    }
}


export const logout = async (req,res,next)=>{
    const {refresh_token} = req.cookies;
    if(refresh_token){
        await User.updateOne({refreshToken:refresh_token}, {$unset:{refreshToken: ""}})
    }
    // Clear the refresh token cookie
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: '',
    });

    // Clear the access token cookie
    res.clearCookie('access_token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: '',
    });

    res.json({message:"Logged out successfully"})
}