const express=require('express');
const router=express.Router();
let products=[];

router.get('/',(req,res,next)=>{
    console.log(products);
    res.render ("products/index", {title: "Product List",products:products});
});

router.post('/',(req,res,next)=>{
    products.push(req.body);
    res.redirect("/products");
});


module.exports=router;