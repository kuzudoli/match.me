const User = require("../modals/Users")
const authController = require("./authController")

//Index
exports.getHome = (req,res)=>{
    res.render("index");
}

//Form
exports.getTraitsPage = async(req,res)=>{
    const user = await User.findOne({email:authController.store.get("email")});
    const userAnswers = [];
    
    userAnswers.push(user.answers.a1);
    userAnswers.push(user.answers.a2);
    userAnswers.push(user.answers.a3);
    userAnswers.push(user.answers.a4);
    userAnswers.push(user.answers.a5);

    res.render("traits",{userAnswers});
}

//Auth
exports.getAuthPage = (req,res)=>{
    res.render("auth");
}