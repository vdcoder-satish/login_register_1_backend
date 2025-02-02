


const authService=require('../services/authService');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt')
const getLogin=async(req,res)=>{
  try{
     const input=req.body;
    const result=await authService.getLogin(input);
    const isPsswordMatched=bcrypt.compareSync(input.password,result?.password);
    // console.log('matching',isPsswordMatched)
    if(result && isPsswordMatched){
      const token=jwt.sign(input,process.env.SECRET_KEY,{
        expiresIn:'1day'
      })
      res.status(200).json({message:'login successfull',token,status:200})

    }else{
      res.status(401).json({message:'credentials are not matched',status:401})
    }
  
  }catch(error){
    console.log(error)
  }
}
module.exports={
  getLogin
}