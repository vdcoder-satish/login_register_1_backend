const joi=require('joi');
const addUser=joi.object({
 name:joi.string().required().label('name'),
 email:joi.string().required().label('email'),
 mobile:joi.number().required().label('mobile'),
 img:joi.string().allow('').label('img'),
 password:joi.string().required().label('password'),
 status:joi.boolean().label('status'),

});
const getUser=joi.object({
id:joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().label('ID')
 });
module.exports={addUser,getUser}