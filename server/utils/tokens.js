import jwt from 'jsonwebtoken'
import crypto from 'crypto';


export const generateToken = (userId) => {
   const access_token = jwt.sign({userId},process.env.ACCESS_SECRET,{expiresIn:'15m'})
   return access_token
}
export const generateRefreshToken = ()=>{
   const refresh_token = crypto.randomBytes(40).toString("hex");
   return refresh_token;
}


