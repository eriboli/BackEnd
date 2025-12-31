// Import express module
const express = require('express');

// Export express module router function
const router = express.Router();

// Import service module
const services = require('../services/services');
//import cadUser from '../services/services.js';
//import index from '../services/services.js';

//const services = require ('../services/services.js');


router.get('/api/', function (req, res) {
    services.index(req, res);
});

//routes
// Criação de um novo usuário
router.post('/api/users', (req, res) => {
    services.cadUser(req, res);
});

router.get('/api/users', (req, res) => {
    services.listUsers(req, res);
});

router.get('/api/users/:codigo', (req, res) => {
    services.getUserById(req, res);
});

router.put('/api/users/:codigo', (req, res) => {
    services.updateUser(req, res);
});

router.delete('/api/users/:codigo', (req, res) => {
    services.deleteUser(req, res);
});

// Export router
module.exports = router;