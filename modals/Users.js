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
        a5:String,
        a6:String,
        a7:String,
        a8:String,
        a9:String,
        a10:String
    },
    matchID:{
        type:String,
        default:null
    }
});

//Create modal
const User = mongoose.model("User",UserSchema);

module.exports = User;