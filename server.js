var express=require('express');
let count=78;
console.log("Welcome to EComm");
console.log("Result="+count);

var app=express();
/*
Request handling
Request processing
Response generation 
Request URL:
     /
     /aboutus
     /contact
     /flowers
*/
var header="<H1>Vijay Sales</H1>";
var line="<hr/>";
var navigation="<a href=''>home</a>|<a href='\aboutus'>About us</a>|<a href='/flowers>flowers</a>";
var bulletedlist="<ol><li>Computers</li> <li>healthcare</li> <li>Management</li>";
var str=header+line+navigation+bulletedlist;
app.get("/",(req,res)=>{res.send("Welcome to bday partayyy")});
app.get("/aboutus",(req,res)=>{res.send("seventeen right here!!\nsit btech compsci")});
app.get("/contact",(req,res)=>{res.send("shivani.shashidhar.btech2022")});
//var flowers=["Gerbera","Rose","Lotus","Jasmine","Lily"];
var flowers=require("./data/products.json");
exports.fetchall()
{
    return flowers;
}

var fetchall=function(){
    return flowers;
}
app.get("/flowers",(req,res)=>{res.send(fetchall)});
app.get("/products",(req,res)=>{res.send(fetchall)});
app.listen(8000);
console.log("Server is listening on port 8000");