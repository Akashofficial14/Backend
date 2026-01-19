const express =require("express")
const app=express()
app.use(express.json()) //middleware kyoki jo data body se aata hai wo http kisi bhi format me la sakta hai or samjhne ke liye
// hame us format ko json me convert karna padta hai or ye saare req or res aane se phle unke format ko chnage kare isiliye yaha 
// sabse upar likha hai yaha par parse kar diya nhiche data ko stringify kar diya
app.post("/",(req,res)=>{
    console.log(req.body) //ye req me jo bhi data aa rha hai usko terminal me show karega lekin terminal pe to chhaihye nhi 
    // yaha se data seedhe database me bhejege 
    // 1.grap the information from user (postman me jo api se data bheja hai )
    // 2. server me yaha postman se req se data bhej diya
    // 3. data ko database me store karwya
    // 4. fir frontend ko response ui me diya
    // const data=req.body
    // res.send(`Recieved Data : ${JSON.stringify(data)}`)
                    //yaha par response nhi dikhega kyoki post methode se browser me response nhi dikhte hai
})
app.get("/",(req,res)=>{
    const searchData=req.query
    console.log(searchData)
})
app.listen(2500,()=>{
    console.log("Server is running..")
})

                                            // GET / POST dono me request client → server hi jati hai
                                            // Dono me response server → client hi aata hai

//app.post -- client (postman) se server me data bhjene ke liye (app.js server hai)
// [DATA CREATE KARNA, SERVER BHAI DATA LO OR KUCH KAAM KARO SAVE,PROCESS] 
//app.get --- server (app.js) se client me data aata hai  [DATA READ KARNA,SERVER BHAI MUJHE DATA DO]
//jab client ko data chhaiye to ye use hota hai