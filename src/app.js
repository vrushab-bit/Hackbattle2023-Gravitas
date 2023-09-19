const express = require('express');
const {PORT}  = require('./config/index');
const app = express();
const bodyParser = require('body-parser');
const connect = require('./config/database');
const ApiRoutes = require('./routes/index');
const Student = require('./models/student');


const setUpAndStartServer = async ()=>{
  
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));

   app.use('/api',ApiRoutes);

   await connect();

   app.listen(PORT,async()=>{

    console.log(`Server started on ${PORT}`);
    
   });

}

setUpAndStartServer();