const express = require('express');
const {PORT}  = require('./config/index');
const app = express();

const connect = require('./config/database');



const setUpAndStartServer = async ()=>{
   await connect();
   app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
   })

}

setUpAndStartServer();