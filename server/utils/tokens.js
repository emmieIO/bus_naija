import jwt from 'jsonwebtoken'


export const generateToken = (userId) => {
   const token = jwt.sign({userId},process.env.ACCESS_SECRET,{expiresIn:'1d'})
   return token
}



