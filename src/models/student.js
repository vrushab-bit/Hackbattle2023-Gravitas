const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    registration_id :{
        type: String,
        unique : true
    },
    avatar :{
        type: String
    },
    password : {
        type : String
    },
    email : {
        type : String
    },
    cousellor_id :{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Counsellor"
    }
},{timestamps:true});

const Student = mongoose.model('Student',StudentSchema);

module.exports = Student;


