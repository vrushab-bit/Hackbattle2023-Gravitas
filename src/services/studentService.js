const Student = require('../models/student');
const jwt = require('jsonwebtoken')

class StudentService {

create = async(data) => {
      try {
          const stud = await Student.create(data);
          return stud;
      } catch (error) {
          throw new Error(error);
      }
}

getStudent = async(data)=>{
    try {
        const stud = await Student.find(data);
        return stud;
    } catch (error) {
        throw new Error(error);
    }
}

createToken(user) {
    try {
      const result = jwt.sign(user, config.JWT_KEY, { expiresIn: "1h" });
      return result;
    } catch (error) {
      console.log("Something went wrong in token creation.");
      throw error;
    }
  }
  verifyToken(token) {
    try {
      const response = jwt.verify(token, config.JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong during verification of the token");
      throw error;
    }
  }

signIn = async(email,plainPassword)=>{
    try {
        
    } catch (error) {
        throw new Error(error);
    }
}
}

module.exports = StudentService;