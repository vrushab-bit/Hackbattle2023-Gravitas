const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {SALT} = require('../config/index');

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

StudentSchema.pre('save', function (next) {
    if (!this.password || !this.isModified('password') || !this.isModified('name')) return next();
  
    const encryptedPassword = bcrypt.hashSync(this.password, Number(SALT));
    this.password = encryptedPassword;
    next();
  });
const Student = mongoose.model('Student',StudentSchema);



module.exports = Student;


