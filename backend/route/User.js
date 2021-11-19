const express=require('express');
const usersRoute=express.Router();
const User=require("../models/User.js");
const asyncerrorHanlder=require("express-async-handler");
//user Routes
//Register
usersRoute.post('/register',asyncerrorHanlder(async(req,res)=>{
const {name,email,password}=req.body;
const userExist=await User.findOne({email:email});
if(userExist)
{
  throw new Error('User Exist');
}
const userCreated=await User.create({email,name,password});
res.send("User created");
})
)
  //login
  usersRoute.post('/login',asyncerrorHanlder(async(req,res)=>{
      res.send('Login Route')
      
  }))
  //update user
  usersRoute.put('/update',(req,res)=>{
      res.send('Update Route')
  })
  
  //delete
  usersRoute.delete('/:id',(req,res)=>{
      res.send('Delete Route')
  })
  
  //fetch users
  usersRoute.get('/',(req,res)=>{
      res.send('Fetch Users')
  })
  
  module.exports=usersRoute;
  