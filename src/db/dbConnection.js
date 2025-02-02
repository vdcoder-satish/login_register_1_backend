const mongoose=require('mongoose');
const getDbConnection=async()=>{
  const configOptions={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    minPoolSize:2,
    maxPoolSize:10
  }
  try{
    // mongodb+srv://satishanengineer:<db_password>@demo.2gfk9.mongodb.net/
    await mongoose.connect(process.env.DB_URI,configOptions);
    console.log('db connected successfully')
  }catch(error){
    console.log('error in connecting db',error)
  }
}
module.exports={getDbConnection}