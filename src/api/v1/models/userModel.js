const { required } = require('joi');
const mongoose=require('mongoose');
const useSchema=new mongoose.Schema({
  name:{type:String,required:true},
  mobile:{type:Number,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  status:{type:Boolean},
  img:{type:String,required:false}

},{
  timeStamps:true
})
const User=mongoose.model('User',useSchema);
module.exports=User;