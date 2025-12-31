//import express from 'express';
const express = require('express');
const cors = require('cors');

//import route_usersfrom './routes/users.js';
const route_users = require('./routes/users.js');

const app = express();
const port = 3000;
app.use(express.json());

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use('/', route_users);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

//export default app;