const { User, Profile, Post, Role } = require('../models');

const createUser=async (req,res) => {

  try {
    const user=await User.create(req.body,{include:[Profile]})
    return res.status(200).json({message:"created successfully",result:user});  
  }
   catch (error) {
    console.error(error);
    res.status(404).json({error:error.message});
  }
};


const findUser=async (req,res) => {
  try {
    const users = await User.findAll();
    console.log(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

module.exports={
  createUser,findUser
}