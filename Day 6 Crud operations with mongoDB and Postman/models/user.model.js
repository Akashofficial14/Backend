const { model, default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
        email:{
        type:String,
        required:true,
    },
        password:{
        type:String,
        required:true,
        minlength:6,
    },
        mobile:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10,
    },
},
{
    timestamps:true,
})
const userModel=mongoose.model("users",userSchema)
module.exports=userModel