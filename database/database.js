const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

//use environment variables
require('dotenv').config()

const db = async () =>{
    try{
        const connect = await  mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected!');
        
    }catch(err){
        console.log(err);
    }
}
//connect to mongodb database
/*const db = await mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log(`MongoDB connected!`))
.catch((err) => console.log(err));
*/
module.exports = db;
