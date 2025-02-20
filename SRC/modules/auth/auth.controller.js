import usermodel from '../../../DB/models/user.model.js';
import bcrypt  from 'bcryptjs';
export const Register = async (req, res) => {
      
      const {email,password,name} = req.body;
      var salt = bcrypt.genSaltSync(8);
      const hash = bcrypt.hashSync(password, salt);
      const user=await usermodel.create({email: email, password: hash,username: name});
      await user.save();
      res.status(201).json({ message: 'User registered successfully', user });
}
export const login = async (req, res) => {
      
          const { email,password } = req.body;
          
          const foundUser = await usermodel.findOne({email});
          if (!foundUser) {
            return res.status(404).json({ message: 'invalid Email'});
          }
          const isPasswordValid = await bcrypt.compare(password, foundUser.password);
          if (!isPasswordValid) {
              return res.status(404).json({ message: 'invalid Password'})
          }    
     return res.status(200).json({ message: "Login successful",foundUser});
     
    };
    

