const express=require("express")
// server - ek machine hai jo ki prograam ki gayi hai jo user ke req or response ko handle karti hai.
const app=express()
// jaise hi ham express ko call karege server ka instance create ho jata hai or isko var me save kr lete hai 2 cheej hoti hai 
//  1. server ke instance ko create karna
//  2. server ke instance ko run karna


                                    //aise server ko program karte hai 

// app.get('/',(req,res)=>{
//     res.send("Hello World")
// })
// app.get('/about',(req,res)=>{
//     res.send("Hello This is about page.")
// })


app.listen(3000) //server is started(running) on this port
