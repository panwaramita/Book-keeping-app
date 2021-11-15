const express=require('express');
const app=express();
const dbconnect=require("./config/dbconnect.js");
const User=require("./models/User.js");
//connect DB
dbconnect();

//passing bodydata

app.use(express.json());
//Routes
//user Routes
//Register
app.post('/api/users/register',async(req,res)=>{
  try
  {
    const {name,email,password}=req.body;
    const user= await User.create({name,email,password});    
    res.send(user);
}
  catch(err)
  {
    console.log(err);
  }
})
//login
app.post('/api/users/login',(req,res)=>{
    res.send('Login Route')
})
//update user
app.put('/api/users/update',(req,res)=>{
    res.send('Update Route')
})

//delete
app.delete('/api/users/:id',(req,res)=>{
    res.send('Delete Route')
})

//fetch users
app.get('/api/users',(req,res)=>{
    res.send('Fetch Users')
})



//server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is up and runing ${PORT}`)
})