//express
var express = require("express");
var app = express();
app.listen(7070,function(){
    console.log("Server start at port 7070")
});

//ejs
var ejs = require("ejs");
app.set("view engine","ejs");

app.get("/",function(req,res){
    var model = {studentid:103,studentName:"Paresh",marks:355,subjects:[
        {subjectName:"Math",marks:90},
        {subjectName:"Physice",marks:80},
        {subjectName:"Chemistry",marks:70}
    ]};
    res.render("index",model);
});

app.get("/loginpage",function(req,res){
    var model = {username:"Paresh",password:"Paresh355#@"};
    res.render("login",model);
});