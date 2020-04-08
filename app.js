var express=require('express');
var app=express();

app.get("/hello",function(req,res){
res.sendFile(__dirname+'/index.html');
});

var port=process.env.PORT||8080;

var server=app.listen(port,function(req,res){
console.log(port);
})