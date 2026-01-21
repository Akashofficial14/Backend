const { default: mongoose } = require("mongoose")

const connectDB=async()=>{
    try {
        let res=await mongoose.connect("mongodb://localhost:27017/crud")
        if(res){
            console.log("mongoDB connected")
        }
    } catch (error) {
        console.log("error while connecting with database",error)
    }
}
module.exports=connectDB