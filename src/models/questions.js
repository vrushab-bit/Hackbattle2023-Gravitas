const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question_text : {
        type : String ,
        unique : true,
    },
    testId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Test"
    },
    a_text : {
        type : String
    },
    a_point : {
        default : '1'
    },
    b_point : {
        default : '2'
    },
    c_point : {
        default : '3'
    },
    d_point : {
        default : '4'
    },
    e_point : {
        default : '5'
    },
    b_text : { type : String},
    c_text : { type : String},
    d_text : { type : String},
    e_text : { type : String},
},{timestamps:true});


const Question = mongoose.model('Question',QuestionSchema);
module.exports = Question;