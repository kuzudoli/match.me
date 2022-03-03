const express = require('express')
const mongoose = require("mongoose");

const app = express()

mongoose.connect("mongodb://localhost/matchme-db").then(()=>{
    console.log("DB Connected!");
}).catch((err)=>{
    console.log(err);
})

//Template Engine
app.set("view engine","ejs");

//Middlewares
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(5000,()=>{
    console.log("PORT 5000 listening...")
});