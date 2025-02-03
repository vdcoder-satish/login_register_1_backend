const express=require('express');
const dotenv=require('dotenv').config();
const app=express();
const helmet=require('helmet');
const bodyParser=require('body-parser');
const port=process.env.PORT;
const route=require('./api/v1/routes/index');
const connectDb=require('../src/db/dbConnection');
app.use(helmet());
app.use(bodyParser.json())
//connect with db
 
//use route
app.use('/api',route)
//start the server 
connectDb.getDbConnection()
app.listen(port,'0.0.0.0',()=>{
  console.log(`server is started on port:${port}`)
});
