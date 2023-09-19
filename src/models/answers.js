const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    registration_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Student'
       },
    question_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Question'
       },
       test_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Test'
       },
       choosen_options : {
        type : String
       }
},{timestamps:true});


const Answer = mongoose.model('Answer',answerSchema);
module.exports = Answer;