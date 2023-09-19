const StudentService = require('../services/studentService');
const studentService = new StudentService();


const getStudent = async(req,res) => {
    try {
     const data = req.body; 
     const student = await studentService.getStudent(data);
     return res.status(200).json({
        message : "successfully fetched the student",
        success : true,
        data : student,
        err : error
     })
    } catch (error) {
        return res.status(400).json({
            message : "not able to fetch student",
            success : false,
            err : error
        })
    }
}

const signIn = async (req, res) => {
    try {
      const response = await studentService.signIn(
        req.body.email,
        req.body.password
      );
      return res.status(201).json({
        message: "Successfully Signed In",
        data: response,
        err: {},
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Not able to sign-in",
        err: error,
        success: false,
        data: {},
      });
    }
  };

module.exports = {
    getStudent,signIn
}
