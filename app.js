const express=require('express');
const app=express();
app.get("/",function(req,res){
    res.send("helo express")
}).listen(4500)