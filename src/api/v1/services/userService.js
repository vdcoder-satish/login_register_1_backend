
const userQuery=require('../queries/userQuery')
 const getUserList=async()=>{
  try{
    const result=await userQuery.getUserList();
    if(result){
      return result
    }
  }catch(error){
    console.log(error)
  }
}

const getUser=async(id)=>{
  try{
    const result=await userQuery.getUserById(id);
    if(result){
      return result
    }
  }catch(error){
    console.log(error)
  }
}

const deleteUser=async(id)=>{
  try{
    const result=await userQuery.deleteUser(id);
    if(result){
      return result
    }
  }catch(error){
    console.log(error)
  }
}
const addUser=async(input)=>{
  try{
    //check existend of user bu email
    const isUserExist=await userQuery.getUserByEmail(input.email);
    // console.log('isuser exist',isUserExist)
    if(isUserExist?.length>0){
      return null;
    }else{
      const result=await userQuery.addUser(input);
      if(result){
        return result
      }
    }
 
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