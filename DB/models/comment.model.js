import { Schema, model, Types } from 'mongoose';

const commentSchema = new Schema({
 text: {
   type: String,
   required: true,
 },
 userid: {
    type: Types.ObjectId,  
    ref: 'User',
    required: true,
 },
 postid: {
    type: Types.ObjectId,  
    ref: 'Post',
    required: true,
 },
},
{
    timestamps: true,
  
});

const commentModel = model('Comment', commentSchema);
export default commentModel;
