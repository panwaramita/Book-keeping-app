const mongoose=require('mongoose');
const bycript=require('bcryptjs');
//schema
 const userSchema=new mongoose.Schema({
     name:{
         type:String,
         required:true
     },
     email:{
         type:String,
         required:true,
         unique:true
     },
     password:{
         type:String,
         required:true
     }
 })





userSchema.pre('save',async function(next){
    const salt=await bycript.genSalt(10);
    this.password=await bycript.hash(this.password,salt);
})

//verify passsword
userSchema.methods.isPasswordMatch=async function(enterdpassword){
    return await bycript.compare(enterdpassword,this.password)
    };
 const User=mongoose.model('User',userSchema);

 module.exports=User;