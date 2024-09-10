import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next)=>{
    const {access_token} = req.cookies;
    if(!access_token){
        return res.status(401).json({message: 'Unauthorized'})
    }
    try {
        const decoded = jwt.verify(access_token, process.env.ACCESS_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
    }
}