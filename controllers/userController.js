const res = require("express/lib/response");
const User = require("../modals/Users")
const authController = require("./authController")

exports.updateAnswers = async(req,res)=>{
    const userMail = authController.store.get("email");
    const user = await User.findOne({email:userMail})

    //console.log(req.body);

    user.answers.a1 = req.body.answers[0];
    user.answers.a2 = req.body.answers[1];
    user.answers.a3 = req.body.answers[2];
    user.answers.a4 = req.body.answers[3];
    user.answers.a5 = req.body.answers[4];
    user.answers.a6 = req.body.answers[5];
    user.answers.a7 = req.body.answers[6];
    user.answers.a8 = req.body.answers[7];
    user.answers.a9 = req.body.answers[8];
    user.answers.a10 = req.body.answers[9];
    await user.save();

    matchUser(user._id);

    res.redirect("/myresult");
}

const matchUser = async(userID) => {
    let matchPoint;
    let currentUser = await User.findOne({_id:userID});//Get current user;
    const userList = await User.find({_id:{$ne:userID}});//Get user list without current user
    userList.forEach(async(user) => {
        //answers
        if(user.matchID == null){
            matchPoint = 0;
            if(user.answers.a1 == currentUser.answers.a1)
                matchPoint++;
            if(user.answers.a2 == currentUser.answers.a2)
                matchPoint++;
            if(user.answers.a3 == currentUser.answers.a3)
                matchPoint++;
            if(user.answers.a4 == currentUser.answers.a4)
                matchPoint++;
            if(user.answers.a5 == currentUser.answers.a5)
                matchPoint++;
            if(user.answers.a6 == currentUser.answers.a6)
                matchPoint++;
            if(user.answers.a7 == currentUser.answers.a7)
                matchPoint++;
            if(user.answers.a8 == currentUser.answers.a8)
                matchPoint++;
            if(user.answers.a9 == currentUser.answers.a9)
                matchPoint++;    
            if(user.answers.a10 == currentUser.answers.a10)
                matchPoint++;
            
            if(matchPoint>=7 && matchPoint <=10){
                await User.findByIdAndUpdate(currentUser._id, {matchID:user._id})
                await User.findByIdAndUpdate(user._id, {matchID:currentUser._id})
            }
        }
    });
}