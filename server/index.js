require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const PORT = process.env.PORT || 5050;

// MIDDLEWARE
app.use(express.json());

//ENDPOINTS
// app.get('/api/movies', getMovies);

//ACTIVATE SERVER
app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`));