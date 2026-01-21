const userModel = require("../models/user.model")
// const reguserController = async (req, res) => {
//     let { username, mobile, email, password } = req.body
//     const newUsers = await userModel.create({
//         username, mobile, email, password
//     })
//     res.send(newUsers)
//     console.log("your data is:", newUsers)
// }

// dekho bahot se api call karni hoti hai or data frontend se aata hai ya jab backend se bhejna hota hai tab validation karte hai baar
// baar taki pata chale ki kaha dikkat aa rhi hai or error aasani se handle kar paye
const reguserController = async (req, res) => {
    try {
        let { username, mobile, email, password } = req.body
        if (!username || !mobile || !email || !password)
            return res.status(400).json({
                message: "All fields are required"
            })
        let newUsers = await userModel.create({
            username, email, password, mobile
        })
        //await --- jab tak data mongoDB me save na ho jaye next line nhi chalegi
        //is step se data mongodb me save hota hai await wali line pe hi data mongodb me save ho chuka hota hai 
        //response se database control nhi hota hai client(frontend) me data bhejne ke liye use hota hai
        if (!newUsers) return res.status(400).json({
            message: "Something went wrong"
        })
        return res.status(201).json({
            success: true,
            message: "user registerd successfully",
            user: newUsers,
        })
        //sab kuch sahi hogya tab ham client ko jo mongoDB me data save hua hai wo bhej rahe hai 
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error,
        })
        //koi bhi error aaygi tab ye wala response milegaa
    }
}
const getAllUserController=async(req,res)=>{
    try {
     let usersData=await userModel.find()
      return res.status(200).json({
        success:true,
        message:"successfully fetched all users data",
        user:usersData,
      })
    } catch (error) {
       return res.status(500).json({
        message:"Internal server error",
        error,
       })
    }
}
module.exports = {
    reguserController,
    getAllUserController,
}