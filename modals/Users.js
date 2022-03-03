const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:String,
    surName:String,
    email:String,
    password:String,
    answers:{
        a1:Boolean,
        a2:Boolean,
        a3:Boolean,
        a4:Boolean,
        a5:Boolean
    }
});

//Create modal
const User = mongoose.model("User",UserSchema);

module.exports = User;