import  connectDb  from '../DB/connection.js';
import authrouter from './modules/auth/auth.router.js';
import cors from 'cors';
import usersrouter from './modules/user/user.router.js';
import postsrouter from './modules/post/post.router.js';

const initApp=(app,express)=>{
   app.use(cors());
   connectDb();
    app.use(express.json());
    app.use('/auth',authrouter);
    app.use('/users',usersrouter);
    app.use('/posts',postsrouter);
    app.use((err,req,res,next)=>{
    return  res.status(err.statusCode).json({ msg: err.message });
    });
}
export  default initApp