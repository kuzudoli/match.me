const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:String,
    surname:String,
    email:String,
    password:String,
    answers:{
        a1:String,
        a2:String,
        a3:String,
        a4:String,
        a5:String
    }
});

//Create modal
const User = mongoose.model("User",UserSchema);

module.exports = User;