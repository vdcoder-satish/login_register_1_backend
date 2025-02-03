


const userService=require('../services/userService');
const bcrypt=require('bcryptjs');
const addUser=async(req,res)=>{
  try{
     let input=req.body;
     const hashedPassword=bcrypt.hashSync(input.password,10);
     input.password=hashedPassword
    const result=await userService.addUser(input);
    if(result){
      res.status(200).json({status:200,message:'successfull',data:result})

    }else{
      res.status(409).json({status:409,message:'user alreaady exist'})

    }
  }catch(error){
    console.log(error)
  }
}
const getUserList=async(req,res)=>{
  try{

    const result=await userService.getUserList();
    res.status(200).json({message:'successfull',data:result})
  }catch(error){
    console.log(error)
  }
};
const getUser=async(req,res)=>{
  try{
     const id=req.params.id;
     console.log('value of id',id)
    const result=await userService.getUser(id);
    if(result?.length>0){
      res.status(200).json({message:'successfull',data:result,status:200})

    }else{
      res.status(404).json({message:'Not Found',data:result,status:404})

    }
  }catch(error){
    console.log(error)
  }
};
const deleteUser=async(req,res)=>{
  try{
     const id=req.params.id;
     console.log('value of id',id)
    const result=await userService.deleteUser(id);
    res.status(200).json({message:'successfull',data:result})
  }catch(error){
    console.log(error)
  }
}




module.exports={
  getUserList,
  addUser,
  getUser,
  deleteUser
}