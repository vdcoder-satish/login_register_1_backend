const joiBodyValidator=(schema)=>{
return (req,res,next)=>{
  const {error}=schema.validate(req.body,{abortEarly:false});
  if(error){
    return res.status(400).json({
      message:'validation error',
      error:error.details[0].message
    })
  }
  next();
}
}
const joiParamsValidator=(schema)=>{
  return (req,res,next)=>{
    const {error}=schema.validate(req.params,{abortEarly:false});
    if(error){
      return res.status(400).json({
        message:'validation error',
        error:error.details[0].message
      })
    }
    next();
  }
  }
  module.exports={joiBodyValidator,joiParamsValidator}
