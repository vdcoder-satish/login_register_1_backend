const joi=require('joi');
const getLoginSchema=joi.object({
  email:joi.string().required().label('email'),
  password:joi.string().required().label('password')
});
module.exports={
  getLoginSchema
}