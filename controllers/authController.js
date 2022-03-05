const User = require("../modals/Users");
const store = require("store");

exports.register = async(req,res)=>{
    if(User.find({email:req.body.email}))
        console.log("user exist");
    else
        console.log("success")
}

exports.login = async(req,res)=>{
    const userData = await User.findOne({email:req.body.email,password:req.body.password})
    if(userData){
        store.set("email",userData.email)
        res.redirect("/traits")
    }
    else{
        res.redirect("/auth")
    }
}

exports.store = store;