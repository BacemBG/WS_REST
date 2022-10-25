const mongoose = require('mongoose');
require('dotenv').config({path:"./.env"});

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MongoURI)
        console.log("DataBase connected....")
    } catch (error) {
        console.log(`can not connect to db ${error}`)
    }
}

module.exports = connectDB