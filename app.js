const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("about");
});

app.listen("https://gokulm2811.github.io/personal/",function(){
  console.log("Success, Server started at port 3000");
});
