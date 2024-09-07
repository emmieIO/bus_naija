import jwt from 'jsonwebtoken'


export const generateToken = (userId) => {
   const access_token = jwt.sign({userId},process.env.ACCESS_SECRET)
   const refresh_token = jwt.sign({userId}, process.env.REFRESH_SECRET)
}