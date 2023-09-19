const express = require('express');


const router = express.Router();

router.get("/check",async(req,res)=>{
    return res.status(200).json({
        message: "hello from the server"
    });
})

module.exports = router;
