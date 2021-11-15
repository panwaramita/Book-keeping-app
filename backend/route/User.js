const express=require('express');
const usersRoute=express.Router();
const User=require("../models/User.js");

//user Routes
//Register
usersRoute.post('/register',async(req,res)=>{
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
  usersRoute.post('/login',(req,res)=>{
      res.send('Login Route')
  })
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
  