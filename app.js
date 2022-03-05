const express = require('express')
const mongoose = require("mongoose");
const pageController = require("./controllers/pageController")
const userController = require("./controllers/userController")
const authController = require("./controllers/authController")


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
app.use(express.urlencoded({extended:true}))//parses incoming request's body
app.use(express.json())//converts encoded body data to json

//GET REQUESTS
app.get('/',pageController.getHome)
app.get('/traits',pageController.getTraitsPage)
app.get('/auth',pageController.getAuthPage)

//POST REQUESTS
app.post('/login',authController.login)
app.post('/register',authController.register);
app.post('/user',userController.updateAnswers)


app.listen(5000,()=>{
    console.log("PORT 5000 listening...")
});