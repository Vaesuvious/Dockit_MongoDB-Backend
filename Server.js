const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes/TaskRoute');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.json());
//Only give backend access to this frontend
app.use(cors({
    origin: [" http://localhost:3000", "https://dockit-app.com"]
}));

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Mongodb connected!'))
.catch((err) => console.log(err));

app.use('/api', routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
