const express = require('express');
const cors = require('cors');
const db = require('./database/database');
const routes = require('./routes/TaskRoute');
const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.json());

//Only give backend access to this frontend
app.use(cors({
    origin: [" http://localhost:7000", "https://dockit-app.onrender.com"]
}));

app.use('/api', routes);

const startServer = async () =>{
    try{
        await db();
        app.listen(PORT, () =>{ 
        console.log(`Listening on: ${PORT}`)});

    }catch(error){
        console.log(error);
    }
};
startServer();
