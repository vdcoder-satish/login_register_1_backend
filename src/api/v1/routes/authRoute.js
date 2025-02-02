const express=require('express');
const router=express.Router();
const authController=require('../controllers/authController');
const validator=require('../middlewares/joiValidator');
const loginSchema=require('../validatorSchemas/authValidator');

// router.put('/get-user/:id',validator.joiParamsValidator(userSchema.getUser),userController.deleteUser);
router.post('/login',validator.joiBodyValidator(loginSchema.getLoginSchema),authController.getLogin);
module.exports=router;