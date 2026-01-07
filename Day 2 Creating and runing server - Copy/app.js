const express=require("express")
//package import kiya
const app=express()
//server ka instance create kiya
// {
    //programm karna taki server req ke hissab se respont kare
 app.get("/",(req,res)=>{
    res.send("Hello I AM / Page")
 })
 app.get("/contact",(req,res)=>{
    res.send("Hello I AM Contact Page")
 })

// }
app.listen(5000)
//server ko is port pe run kiya


// API has set of protocols and tools and it allow us to communicate and exchnage the data between 2 application 
// restful api is a type of API works on only 2 protocols =>> HTTP HTTPS
// these are some methodes - GET ,POST ,PUT, PATCH,DELETE