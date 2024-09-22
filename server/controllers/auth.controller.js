import User from "../models/user.model.js";
import userService from "../services/userService.js";
import { apiError } from "../utils/apiError.js";



export const register = async (req, res, next) => {
    try {
        const { user, token } = await userService.createUser(req.body);
        res.status(201).json({
            success: true,
            message: "Success!, verify Account",
            token,
            user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const response = await userService.userLogin({ email, password });
        const { token, user } = response;

        res.json({
            success: true,
            message: "Login successful",
            token,
            user: {
                ...user._doc,
                password: undefined
            }
        });
    } catch (error) {
        next(error)

    }
}

export const userVerification = async (req, res, next) => {
    try {
        const { email, code } = req.body;
        const { userId } = req.user
        const user = await userService.verifyEmail({ email, code, userId });
        res.json({ success: true, message: "Email verified successfully", user })
    } catch (error) {
        next(error)
    }
}

export const resendVerificationCode = async (req, res, next) => {
    try {
        const { email } = req.body;
        const { userId } = req.user
        const user = await userService.resendVerificationCode({ email, userId });
        res.json({ success: true, message: "Verification code resent successfully", user })
    } catch (error) {
        next(error)
    }
}

export const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const data = await userService.forgotPassword({ email });
        res.json({
            success: true, message: "Password reset link sent to your email", data })
    } catch (error) {
        next(error)
    }
}

export const resetPassword = async (req, res, next) => {
    try {
        const { newPassword, passwordConfirmation, resetToken } = req.body;
        const user = await userService.resetPassword({ newPassword, passwordConfirmation, resetToken});
        res.json({ success: true, message: "Password reset successfully", user })
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const { userId } = req.user;
        const user = await User.findById(userId).lean();
        res.json({ ...user, password: undefined })
    } catch (error) {
        next(error)
    }
}


