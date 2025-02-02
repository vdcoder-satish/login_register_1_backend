
const User =require('../models/userModel')
const addUser=async(input)=>{
  try{
   return await new User(input).save();
    // return 'success'
  }catch(error){
   console.log(error)
  }
 }

const getUserByEmail=async(input)=>{
return await User.find({email:input})
}
const getUserById=async(id)=>{
  return await User.find({_id:id,status:true})
  }
  const deleteUser=async(id)=>{
    return await User.findOneAndUpdate({_id:id},{$set:{status:false}});

    }
const getUserList=async()=>{
 try{
     return User.find({status:true}).select('name email mobile status');
 }catch(error){
  console.log(error)
 }
}
module.exports={
  getUserList,
  addUser,
  getUserByEmail,
  getUserById,
  deleteUser
}