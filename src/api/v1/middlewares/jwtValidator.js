const jwt=require('jsonwebtoken')
const tokenValidator=async(req,res,next)=>{
  let token;
  const result=req?.headers['authorization']?.split(' ');
  // const token=result[1];
  if(result){
    token=result[1]
  }
  if(!token){
    res.status(403).json({message:'unauthrised access',statusCode:403});
  }else{
    jwt.verify(token,process.env.SECRET_KEY,(error,decoded)=>{
      if(error){
        res.status(403).json({message:'unauthrised access',statusCode:403});

      }else{
        req.user=decoded;
        next()
      }
    })
    // next()
  }

}

module.exports={
  tokenValidator
}