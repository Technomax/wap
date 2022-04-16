const express=require('express');

const app=express();
app.listen(5000);

app.use('/',(req,res,next)=>{
    console.log('first');
    next();
},(req,res,next)=>{
    console.log('second');
    next('route');
},(req,res,next)=>{
    console.log('third');
});

app.get('/',(req,res,next)=>{
    console.log('last');
});