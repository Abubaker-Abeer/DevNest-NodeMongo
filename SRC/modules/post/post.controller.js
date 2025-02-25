import postmodel from '../../../DB/models/post.model.js';

export const getAll=async(req, res, next)=>{
    const posts=await postmodel.find({}).populate([
        { path: 'userid', select: 'username' },
        { path: 'like', select: 'username' },
        { path: 'unlike', select: 'username' },
        { path: 'comments'}
    ]);

    res.status(200).json({ message: 'success',posts});
}
export const createpost=async(req, res, next)=>{
    const{title,caption}=req.body;
    const newpost=await postmodel.create({title,caption,userid:req.id});
    return res.status(201).json({message: 'success',newpost});
}
export const likepost=async(req, res, next)=>{
    const{id}=req.params;
    const userid=req.id;
    const post=await postmodel.findByIdAndUpdate(id,{ $addToSet: { like: userid },$pull:{unlike:userid}},{new: true});
    post.totalvote=post.like.length-post.unlike.length;
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    post.totalvote = post.like.length - post.unlike.length;
    await post.save();
    return res.status(200).json({message: 'success',post});
}
export const unlikepost=async(req, res, next)=>{
    const{id}=req.params;
    const userid=req.id;
    const post=await postmodel.findByIdAndUpdate(id,{ $addToSet: { unlike: userid },$pull:{like:userid}},{new: true});
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    post.totalvote = post.like.length - post.unlike.length;
    await post.save();
    return res.status(200).json({message: 'success',post});
}

