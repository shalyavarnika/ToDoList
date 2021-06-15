//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();

const items = ["Buy food","Cook food","Eat"];
const workItems = [];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    

    res.render("list",{listTitle : date.getdate(), newListItem: items});
});

app.post("/",function(req,res){
    if(req.body.list === "Work"){
        workItems.push(req.body.newItem);
        res.redirect("/work");
    }
    else{
        items.push(req.body.newItem);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List", newListItem: workItems});
});

app.post("/work",function(req,res){
    workItems.push(req.body.newItem);
    res.redirect("/work");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000,function(){
    console.log("server started");
});