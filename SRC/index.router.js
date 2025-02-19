import  connectDb  from '../DB/connection.js';
import authrouter from './modules/auth/auth.router.js';
import cors from 'cors';

const initApp=(app,express)=>{
   app.use(cors());
   connectDb();
    app.use(express.json());
    app.use('/auth',authrouter);
    app.use((err,req,res,next)=>{
    return  res.status(err.statusCode).json({ msg: err.message });
    });
}
export  default initApp