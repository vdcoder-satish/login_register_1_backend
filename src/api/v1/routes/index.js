const express=require('express');
const router=express.Router();
const userRoute=require('../routes/userRoute');
const authRoute=require('../routes/authRoute');



router.use('/v1',userRoute);;
router.use('/v1',authRoute)


module.exports=router;