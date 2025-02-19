import usermodel from '../../../DB/models/user.model.js';
export const Register = async (req, res) => {
      
      const {email,password,name} = req.body;
      const user=await usermodel.create({email: email, password: password,username: name});
      res.status(201).json({ message: 'User registered successfully', user });
  }

