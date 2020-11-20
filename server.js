// imports
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// const routes = require('./routes');
const port = process.env.PORT;
const app = express();

// CORS - Cross Origi Resource Sharing
app.use(cors({
  origin: [`http://localhost:3000`],
  methods: "GET,POST,PUT,DELETE",
  // credentials: true, // allows the session cookie to be sent back and forth from server to client
  optionsSuccessStatus: 200 // some legacy browsers choke on satus 204
}));

// middleware - JSON parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// middleware - API routes
// Game Routes
// app.use('/api/v1/games', routes.games);
// Auth Routes
// app.use('/api/v1/auth', routes.auth);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
