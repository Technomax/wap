const express = require("express");

const router=express.Router();

let users=[];

router.get('/',(req,res,next)=>{
    res.render("users/index",{title:"User List", users});
});

router.post('/',(req,res,next)=>{
    users.push(req.body);
    res.redirect("/users");
})

module.exports=router;