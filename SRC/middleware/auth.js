import jwt from 'jsonwebtoken';
export const auth=()=>{
return async(req , res, next)=>{
    const{token}=req.headers;
    if(!token){
        return res.status(401).json({message:'unauthorized'})
    }
    const decoded=jwt.verify(token,'your_secret_key')
    req.id=decoded.id;
    next();
}
}