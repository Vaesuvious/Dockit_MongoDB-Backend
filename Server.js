const express = require('express');
const routes = require('./routes/TaskRoute');
import { db } from './database/database.js';
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.json());

//Only give backend access to this frontend
app.use(cors({
    origin: [" http://localhost:7000", "https://dockit-app.onrender.com"]
}));

app.use('/api', routes);

//db();
app.listen(PORT, () => console.log(`Listening on: ${PORT}`));


/*const startServer = async () =>{
    try{
        await db();
        app.listen(PORT, () =>{ 
        console.log(`Listening on: ${PORT}`)});

    }catch(error){
        console.log(error);
    }
};
startServer();
*/