const mongoose = require('mongoose');

const evaulationSchema = new mongoose.Schema({
   registration_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Student'
   },
   score : {
     type : String,
   },
   test_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Test'
   }

},{timestamps:true});

const Evaluation = mongoose.Schema('Evaluation',evaulationSchema);

module.exports = Evaluation;