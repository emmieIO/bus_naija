import User from "../models/user.model.js";
import userService from "../services/userService.js";
import { apiError } from "../utils/apiError.js";


export const register = async (req, res, next)=>{
    try{
        const user = await userService.createUser(req.body);
        res.status(201).json({...user._doc, password:undefined});
    }catch(error){
        next(error);
    }


}

export const login = async (req, res, next)=>{

}