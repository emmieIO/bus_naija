import { apiError } from './../utils/apiError.js';
import User from "../models/user.model.js"
import { generateToken } from '../utils/tokens.js';
import crypto from 'crypto';
import { sendVerificationEmail, sendWelcomeMail } from '../utils/mail.js';

class UserService {

    async createUser(data) {
        try {
            const user = await User.create(data)
            if(user){
                // create 6-digit verification code
                const verificationCode = crypto.randomInt(100000, 999999)
                user.verificationCode = verificationCode
                user.verificationCodeExpiresAt = Date.now() + 10 * 60 * 1000
                user.save();
                // send verification email
                sendVerificationEmail({
                    email: user.email,
                    firstname: user.firstname,
                    code: verificationCode
                })
            }
            const token = generateToken(user._id)
            return {user, token}
        } catch (error) {
            throw error
        }
    }

    async userLogin(data) {
        try {
            const { email, password } = data;
            const user = await User.findOne({ email });
            if (!user) {
                throw apiError('Credentials not found in our records', 403)
            }
            const isMatch = await user.matchPassword(password)
            if (!isMatch) {
                throw apiError('Credentials not found in our records', 403)
            }
            const token = generateToken(user._id)
            user.save();
            return {user, token}
        } catch (error) {
            throw error;
        }
    }

    async verifyEmail(data){
        try {
            const { email, code, userId } = data;
            const user = await User.findById(userId);
            if (!user) {
                throw apiError('User not found', 404)
            }
            if (user.email != email) {
                throw apiError('Invalid email', 403)
            }
            if (user.verificationCode !== code) {
                throw apiError('Invalid verification code', 403)
            }
            if (user.verificationCodeExpiresAt < Date.now()) {
                throw apiError('Verification code has expired', 403)
            }
            user.isVerified = true;
            user.verificationCode = undefined
            user.verificationCodeExpiresAt = undefined
            user.save();
            sendWelcomeMail({firstname:user.firstname, email:user.email})
            return user
        } catch (error) {
            throw error;
        }
    }

    async resendVerificationCode(data){
        try {
            const { email, userId } = data;
            const user = await User.findOne({_id:userId });
            if (!user) {
                throw apiError('User not found', 404)
            }
            if (user.email !== email) {
                throw apiError('Invalid email', 403)
            }
            // check if user is verified already
            if (user.isVerified) {
                throw apiError('Email is already verified', 403)
            }
            // create 6-digit verification code
            const verificationCode = crypto.randomInt(100000, 999999)
            user.verificationCode = verificationCode
            user.verificationCodeExpiresAt = Date.now() + 10 * 60 * 1000
            user.save();
            // send verification email
            sendVerificationEmail({
                email: user.email,
                firstname: user.firstname,
                code: verificationCode
            })
            return user
        } catch (error) {
            throw error;
        }
    }
}

const userService = new UserService();
export default userService;
;