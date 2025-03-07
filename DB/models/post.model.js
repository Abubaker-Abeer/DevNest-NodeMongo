import { Schema, model, Types } from 'mongoose';

const postSchema = new Schema({
 title: {
   type: String,
   required: true,
 },
 caption: {
    type: String,
    required: false,
 },
 userid: {
    type: Types.ObjectId,  
    ref: 'User',
    required: true,
 },
 like: [
    {
        type: Types.ObjectId,
        ref: 'User'
    }
 ],
 unlike: [
    {
        type: Types.ObjectId,
        ref: 'User'
    }
 ],
 totalvote:{
    type: Number,
    default:0 }
 }, {
   toJSON: {virtuals:true},
   toObject:{virtuals:true},
 
 
});
postSchema.virtual('comments',{
  ref: 'Comment',
  localField: '_id',
  foreignField: 'postid'   
})
const postModel = model('Post', postSchema);
export default postModel;
