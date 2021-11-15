const mongoose=require('mongoose');
const dbUrl="mongodb+srv://amita:amitaamita@cluster0.rsud2.mongodb.net/book-keeping-app";

const dbconnect=()=>{
    mongoose.connect(dbUrl,{
    }).then(()=>console.log("Db Connected"))
    .catch((err)=>console.log(err))
}

module.exports=dbconnect;