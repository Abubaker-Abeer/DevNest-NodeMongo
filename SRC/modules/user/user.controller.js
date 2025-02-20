import usermodel from '../../../DB/models/user.model.js';
export const getAll = async (req, res) => {
      const users=await usermodel.find();
      res.status(200).json({ message: 'success' ,users});

}
export const getuser = async (req, res) => {
     const {id}=req.params;
    const user=await usermodel.findOne({_id:id});
    res.status(200).json({ message: 'success',user});

}
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email} = req.body;

    const user = await usermodel.findOneAndUpdate({ _id: id },{ email },{ new: true }
    );

    return res.json(user);
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await usermodel.findOneAndDelete({ _id: id });
    return res.json(user);
};



