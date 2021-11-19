const express=require('express');
const app=express();
const error=require("./middleware/errorMiddleHandle.js");
const userRoute=require('./route/User.js');
const dotenv=require('dotenv');

//passing bodydata
dotenv.config();

const dbconnect=require("./config/dbconnect.js");

//connect DB
dbconnect();
app.use(express.json());
//Routes

app.use('/api/users',userRoute);


//error middleware
app.use(error.errorMiddlewareHandler);
//server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is up and runing ${PORT}`)
})