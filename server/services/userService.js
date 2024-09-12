import { apiError } from './../utils/apiError.js';
import User from "../models/user.model.js"
import { generateToken } from '../utils/tokens.js';

class UserService {

    async createUser(data) {
        try {
            const user = await User.create(data)
            return user
        } catch (error) {
            throw error
        }
    }

    async userLogin(data) {
        try {
            const { email, password } = data;
            const user = await User.findOne({ email });
            if (!user) {
                throw apiError('Invalid email or password', 403)
            }
            const isMatch = await user.matchPassword(password)
            if (!isMatch) {
                throw apiError('Credentials not found in our records', 403)
            }
            const token = generateToken(user._id);
            user.save();
            return {user, token}
        } catch (error) {
            throw error;
        }
    }


}

const userService = new UserService();
export default userService;
