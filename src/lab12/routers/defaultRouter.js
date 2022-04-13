const express = require("express");

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.render("default/index",{title:"Home Page"});
});

module.exports=router;