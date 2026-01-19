const express=require("express")
const { default: mongoose } = require("mongoose")
const userModel = require("./models/user.model")

const connectDB=async()=>{
try {
    let res=await mongoose.connect("mongodb://localhost:27017/akash")
    if(res){
        console.log("database is connected")
    }
} catch (error) {
    console.log("error while database is connecting..",error)
}
}
connectDB()

const app=express()
app.get("/",(req,res)=>{
    res.send("Hello World.")
})

app.get("/user-data",async(req,res)=>{
  let data= await userModel.create({
    name:"Akash",
    age:18,
   })
   res.send(data)
})

app.listen(3000,()=>{
    console.log("server is runnning on port 3000.")
})