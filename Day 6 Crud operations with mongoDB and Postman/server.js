const express=require("express")
const connectDB = require("./cofig/db")
const userRoutes=require("./routes/user.routes")
const app=express()
connectDB()
app.use(express.json())
//hamare pass multiple users ho sakte hai products,orders too many thing or sabme crud operations perform kar sakte hai or agar 
// sabko ek sath yaha par likhege to main code me bhara bhara lagega isse bachne ke liye route banate hai or unme sabme ek ek karke
//create delete put get ke routes banate hai or unme alag se controllers ki file banate hai or use karte hai
// expreess(server banao)
// db banao connect karo
//model banao ki kis format me data chahiye
//routes banao taki yaha par bhara bhara code na ho or waha par crud ke liye api call ho sake 
//controllers banane hai sabke (req,res) ke create,update,delete karne jinko direct route me call kar dege or routes ko seedhe 
//middleware ke through yaha call kar lege

app.use("/auth/user",userRoutes)
app.listen(3000,()=>{
    console.log("server is running on port 3000.")
})