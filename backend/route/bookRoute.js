const expressAsyncHandler=require('express-async-handler');
const Book=require('../models/Book.js');
const express=require('express');
const bookRouter=express.Router();

//create book

bookRouter.post('/',expressAsyncHandler(async(req,res)=>{
    const book=await Book.create(req.body);
    if(book)
    {
        res.status(200);
        res.json(book);

    }
    else
    {
        res.status(500);
        throw new Error("Book creating fail")
    }
}))

//fetch book

bookRouter.post('/',expressAsyncHandler(async(req,res)=>{
    const book=await Book.create(req.body);
    if(book)
    {
        res.status(200);
        res.json(book);

    }
    else
    {
        res.status(500);
        throw new Error("Book creating fail")
    }
}))

module.exports=bookRouter;