const express=require('express');
const app=express();
const dbconnect=require("./config/dbconnect.js");
const userRoute=require('./route/User.js');
//connect DB
dbconnect();

//passing bodydata

app.use(express.json());
//Routes

app.use('/api/users',userRoute)
//server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is up and runing ${PORT}`)
})