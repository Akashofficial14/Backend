const { default: mongoose } = require("mongoose");
//object bana rahe hai new keyword se jiska naam hai userSchema extract kar rhe class mongoose.schema se
const userSchema= new mongoose.Schema({
name:String,
age:Number,
},{
    timestamps:true,
})
// schema matlab jo data bhejne wale hai uska proper structure ki uski kyaa kyaa field ya requirmnets hogii
const userModel=mongoose.model("users",userSchema)
//isse user model banaya jisme model ka naam jo ki database me show hoga or ye inflection rule follow karta hai jo model ke naam
// ko lower cases me convert karta hai or plural bhi khud se bana deta hai then we export this model to be used in server api
module.exports=userModel;