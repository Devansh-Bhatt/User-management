const express = require("express");
const app = express();
const PORT = 8000;
require("dotenv/config");
const mongoose = require("mongoose")
app.get("/login",(req,res)=>{
    res.send('Login Page')
})
app.get("/admin",(req,res)=>{
    res.send("Admin page")
})
app.get("/user",(req,res)=>{
    res.send("User Page")
})
mongoose.connect(process.env.DB_Connection,{useNewUrlParser: true},()=>{
    console.log("connected to db");
});
app.listen(PORT,()=>{
    console.log("server listening on port 8000..")
})