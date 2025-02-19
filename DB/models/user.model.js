import  {Schema,model} from 'mongoose';

const userSchema = new Schema({
 username: {
   type: String,
   required: true,
 },
 email: {
    type: String,
    required: true,
 },
 password: {
    type: String,
    required: true,
 },
confirmPassword: {
    type: Boolean,
    required: false,
},
gender:{
    type: String,
    enum:['Male', 'Female'],
},
age:{
    type: Number,
}
});
const usermodel=model('User', userSchema)
export default usermodel