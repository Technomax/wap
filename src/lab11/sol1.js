const dns=require('dns')

//finding address for the valid url
dns.resolve('www.miu.edu',(err,address)=>{
    if(address){
        console.log(address);
    }
    if(err){
        console.log(err);
    }
});

//finding address for non-existence url
dns.resolve('www.miu.edux',(err,address)=>{
    if(address){
        console.log(address);
    }
    if(err){
        console.log("Address not found for the given url.");
    }
});