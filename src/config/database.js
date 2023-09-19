const mongoose = require('mongoose');
const { DB_URL } = require('./index');


const connect = async () => {
    try {
        await mongoose.connect(DB_URL, {
            bufferCommands: false, 
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    } catch (err) {
        console.log(`Error in connecting the database ${err}`);
    }
}

module.exports = connect;