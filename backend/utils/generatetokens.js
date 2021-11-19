const jsontokens=require('jsonwebtoken');

const generateoken=(userId)=>{
return jsontokens.sign({
    id:userId
},process.env.JT_SCERET_KEY,{
    expiresIn:'30d',
})
}

module.exports=generateoken;