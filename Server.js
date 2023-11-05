const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const routes = require('./routes/TaskRoute');
const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.json());

//Only give backend access to this frontend
app.use(cors({
    origin: [" http://localhost:3000", "https://dockit-app.onrender.com"]
}));

app.use('/api', routes);

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Mongodb connected!'))
.catch((err) => console.log(err));

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