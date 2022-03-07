const { use } = require("express/lib/application");
const User = require("../modals/Users")
const authController = require("./authController")

//Index
exports.getHome = (req,res)=>{
    res.render("index");
}

//Form
exports.getTraitsPage = async(req,res)=>{
    if(authController.store.get("email") == undefined)
        res.redirect("/auth");
    else{
        const user = await User.findOne({email:authController.store.get("email")});
        const userAnswers = [];
        
        userAnswers.push(user.answers.a1);
        userAnswers.push(user.answers.a2);
        userAnswers.push(user.answers.a3);
        userAnswers.push(user.answers.a4);
        userAnswers.push(user.answers.a5);
        userAnswers.push(user.answers.a6);
        userAnswers.push(user.answers.a7);
        userAnswers.push(user.answers.a8);
        userAnswers.push(user.answers.a9);
        userAnswers.push(user.answers.a10);

        res.render("traits",{userAnswers});
    }
}

//Auth
exports.getAuthPage = (req,res)=>{
    authController.store.clearAll();
    res.render("auth");
}

//MyResult
exports.getResultPage = async(req,res)=>{
    if(authController.store.get("email") == undefined)
        res.redirect("/auth");
    else{
        const user = await User.findOne({email:authController.store.get("email")});
        const matchUser = await User.findOne({_id:user.matchID});

        res.render("myresult",{
            name: matchUser != undefined ? matchUser.name : undefined,
            surname: matchUser != undefined ? matchUser.surname : undefined,
            email: matchUser != undefined ? matchUser.email : undefined,
            notFoundMessage:"Sorry, we couldn't find a match for you 😢"
        })
    }
}