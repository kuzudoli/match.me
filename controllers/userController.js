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

    user.save();

    res.redirect("/");
}