const mongoose = require('mongoose');

const CounsellorSchema = new mongoose.Schema({
    name : {
        type : String
    },
    password : {
        type: String
    },
    email : {
       type : String, 
       unique : true
    },
    phone : {
        type : String ,
        unique : true,
    },
    cabin_no : {
        type : String,
    },
    avatar : {
        type : String
    }
},{timestamps:true});



const Counsellor = mongoose.model('Counsellor',CounsellorSchema);
module.exports = Counsellor;