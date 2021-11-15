const { application } = require('express');
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const dbUrl="mongodb+srv://amita:amitaamita@cluster0.rsud2.mongodb.net/book-keeping-app";

//connect DB

mongoose.connect(dbUrl,{
}).then(()=>console.log("Db Connected"))
.catch((err)=>console.log(err))

//Routes
//user Routes
//Register
app.post('/api/users/register',(req,res)=>{
    res.send('Register Route')
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