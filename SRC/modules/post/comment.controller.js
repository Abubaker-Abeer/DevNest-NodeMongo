import commentmodel from '../../../DB/models/comment.model.js';

export const creatcomment = async (req,res)=>{
     const {postid}=req.params;
    const {text}=req.body;
    const userid = req.id;
    const comment=await commentmodel.create({postid,userid,text});
    return res.status(201).json({message:"success",comment})
}