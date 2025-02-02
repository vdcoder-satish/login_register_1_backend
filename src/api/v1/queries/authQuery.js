const User =require('../models/userModel')

const getUserByEmail=async(input)=>{
  return await User.find({email:input})
  };

  const getLogin=async(input)=>{
    try{
      
      const result=await User.findOne({email:input.email});
      // console.log('value fo res',result)
      return result;
    }catch(error){
      console.log(error)
    }
  }
  module.exports={
    getUserByEmail,
    getLogin
  }