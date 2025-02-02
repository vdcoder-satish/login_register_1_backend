const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController')
const validator=require('../middlewares/joiValidator')
const userSchema=require('../validatorSchemas/userValidator');
const jwtValidator=require('../middlewares/jwtValidator')
router.get('/user-list',jwtValidator.tokenValidator,userController.getUserList);
router.post('/add-user',validator.joiBodyValidator(userSchema.addUser),userController.addUser);
router.get('/get-user/:id',jwtValidator.tokenValidator,validator.joiParamsValidator(userSchema.getUser),userController.getUser);
//delete user
router.put('/get-user/:id',jwtValidator.tokenValidator,validator.joiParamsValidator(userSchema.getUser),userController.deleteUser);

module.exports=router;