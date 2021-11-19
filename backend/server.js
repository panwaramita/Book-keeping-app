const express=require('express');
const app=express();
const dbconnect=require("./config/dbconnect.js");
const error=require("./middleware/errorMiddleHandle.js");
const userRoute=require('./route/User.js');
//connect DB
dbconnect();

//passing bodydata

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