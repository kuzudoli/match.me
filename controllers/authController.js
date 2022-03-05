const User = require("../modals/Users");
const store = require("store");

exports.register = async(req,res)=>{
    const userData = await User.findOne({email:req.body.email});
    if(userData)
        res.render("auth",{error:"Email already registered, sign in!"})
    else{
        User.create({
            name:req.body.name,
            surname:req.body.surname,
            email:req.body.email,
            password:req.body.password,
            answers:{
                a1:"no",
                a2:"no",
                a3:"no",
                a4:"no",
                a5:"no"
            }
        })

        res.redirect("/auth")
    }
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