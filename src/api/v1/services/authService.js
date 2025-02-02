
const userQuery=require('../queries/authQuery')
const getLogin=async(input)=>{
  try{

    const isUserExist=await userQuery.getUserByEmail(input.email);
    if(isUserExist?.length>0){
   return   await userQuery.getLogin(input);
    }else{
      return null;
    }
   
 
  }catch(error){
    console.log(error)
  }
}
module.exports={
  getLogin
}