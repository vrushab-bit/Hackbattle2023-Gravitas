const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {SALT} = require('../config/index');

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

CounsellorSchema.pre('save', function (next) {
    if (!this.password || !this.isModified('password') || !this.isModified('name')) return next();
  
    const encryptedPassword = bcrypt.hashSync(this.password, Number(SALT));
    this.password = encryptedPassword;
    next();
  });

const Counsellor = mongoose.model('Counsellor',CounsellorSchema);
module.exports = Counsellor;