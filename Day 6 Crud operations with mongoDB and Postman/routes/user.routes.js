const express=require("express")
const {reguserController,getAllUserController} = require("../controllers/user.controller")
const router=express.Router()

router.post("/create",reguserController)
router.get("/",getAllUserController)
module.exports=router