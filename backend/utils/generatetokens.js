const jsontokens=require('jsonwebtoken');

const generateoken=(userId)=>{
return jsontokens.sign({
    id:userId
},'nodejs',{
    expiresIn:'30d',
})
}

module.exports=generateoken;