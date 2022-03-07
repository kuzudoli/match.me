const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    Description:Array
});

//Create modal
const Question = mongoose.model("Question",QuestionSchema);

module.exports = Question;