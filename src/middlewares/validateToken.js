import jwt from 'jsonwebtoken';

export const authRequired = (req,res,next) => {
    const {token} = req.cookies;
    if(!token) return res.status(401).json({message: "No token"});
    jwt.verify(token,'secret123',(err,user)=>{
        if(err) return res.status(401).json({message:"Invalid Token"})
        req.user = user
    });
    next();
}