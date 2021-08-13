require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const path = require('path');
const cors = require('cors');
const { getAll } = require('./movies_controller');

const { CONNECTION_STRING } = process.env;
const PORT = process.env.PORT || 5050;

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(express.static(path.join('../build')))

massive({
    connectionString: process.env.DATABASE_URL || CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then( (db) => {
    app.set('db', db);
    console.log(`DB connection established successfully!`);
}).catch((err) => {
    console.log(`Error connecting DB: ${err}`);
})


//ENDPOINTS
app.get('/api/movies', getAll);

//ACTIVATE SERVER
app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`));