const { where } = require('sequelize');
const { User, Profile, Post, Role } = require('../models');
const { use } = require('../routes');

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


const getUser=async(req,res)=>{
    try{
      const user=await User.findOne({
        where:{username:req.params.username},
        include:[Profile,Role,Post]
      });
      if(user){
        res.json(user);
      }
      else{
        res.status(404).json({error:"user not found"})
      }
    }
    catch(err){
      res.status(400).json({error:err.message});
    }
}

const updateuser=async (req,res)=>{
  try{
    const user=await User.findOne({
      where:{username:req.params.username},
      include:[Profile]
    })
  }
  catch(err){
    console.log("error occured");
    res.status(400).json({error:err.message});
  }
}


module.exports={
  createUser,getUser,
}