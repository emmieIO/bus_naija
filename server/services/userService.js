import { apiError } from './../utils/apiError.js';
import User from "../models/user.model.js"

class UserService {

    async createUser(data){
        try{
            const user = await User.create(data)
            return user
        }catch(error){
            throw apiError(400, error.message)
        }
    }
}

const userService = new UserService();
export default userService;
