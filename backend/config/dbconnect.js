const mongoose=require('mongoose');
const dbUrl=process.env.mongodb_url;

const dbconnect=()=>{
    mongoose.connect(dbUrl,{
    }).then(()=>console.log("Db Connected"))
    .catch((err)=>console.log(err))
}

module.exports=dbconnect;