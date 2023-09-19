const express = require('express');
const {} = require('../../services/studentService');

const router = express.Router();

router.get("/check",async(req,res)=>{
    return res.status(200).json({
        message: "hello from the server"
    });
});

router.post('/loginStudent',)

module.exports = router;
