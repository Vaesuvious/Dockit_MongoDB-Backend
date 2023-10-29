const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')

//use environment variables
require('dotenv').config()

//connect to mongodb database
const db = mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`MongoDB connected!`))
.catch((err) => console.log(err))


module.exports = db;
